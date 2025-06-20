import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from "aws-amplify/api";
import { createTodo, deleteTodo, updateTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import getThemeStyles from "./styles";

Amplify.configure(awsExports);
const client = generateClient();

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [theme, setTheme] = useState("light");

  const styles = React.useMemo(() => getThemeStyles(theme), [theme]);

  const [todos, setTodos] = useState([]);
  useEffect(() => {

    const fetchTodos = async () => {
      try {
        const response = await client.graphql({
          query: listTodos,
        });
        setTodos(response.data.listTodos.items);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const openAddModal = () => {
    setInputValue("");
    setDescriptionValue("");
    setEditingTodoId(null);
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const openEditModal = (id, name, description) => {
    setEditingTodoId(id);
    setInputValue(name);
    setDescriptionValue(description);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!inputValue.trim()) return; // Prevent saving empty todos
    if (isEditing) {
      // Update existing todo
      try {
        const response = await client.graphql({
          query: updateTodo,
          variables: {
            input: { id: editingTodoId, name: inputValue, description: descriptionValue }
          }
        });
        const updatedTodo = response.data.updateTodo;
        setTodos(todos.map(todo => (todo.id === editingTodoId ? updatedTodo : todo)));
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    } else {
      // Add new todo
      try {
        const response = await client.graphql({
          query: createTodo,
          variables: {
            input: {
              name: inputValue,
              description: descriptionValue
            }
          }
        });
        const todo = response.data.createTodo;
        setTodos([...todos, todo]);
      } catch (error) {
        console.error("Error creating todo:", error);
      }
    }
    handleModalClose();
  };

  const handleDelete = async (id) => {
    try {
      await client.graphql({
        query: deleteTodo,
        variables: { input: { id } }
      });
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setEditingTodoId(null);
    setInputValue("");
    setDescriptionValue("");
  };

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={styles.main}>
          <h1 style={styles.header}>Hello {user.username} 👋</h1>
          <div style={styles.buttonRow}>
            <button style={styles.button} onClick={openAddModal}>Add Todo</button>
            <button style={{ ...styles.button, marginLeft: "auto" }} onClick={toggleTheme}>
              Switch to {theme === "light" ? "Dark" : "Light"} Theme
            </button>
            <button style={styles.buttonSignOut} onClick={signOut}>Sign Out</button>
          </div>
          <ul style={styles.ul}>
            {todos.length ? todos.map(todo => (
              <li style={styles.li} key={todo.id}>
                <span style={styles.todoName}>{todo.name}</span>
                <span style={styles.todoDescription}>{todo.description}</span>
                <button style={styles.deleteButton} onClick={() => handleDelete(todo.id)}>Delete</button>
                <button style={styles.updateButton} onClick={() => openEditModal(todo.id, todo.name, todo.description)}>Update</button>
              </li>
            )) : (
              <li style={styles.li}>
                <span style={styles.header}>No todos found</span>
              </li>
            )}
          </ul>
          {isModalOpen && (
            <div style={styles.modalOverlay}>
              <div
                style={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                <h2 style={styles.modalTitle} id="modal-title">
                  {isEditing ? "Edit Todo" : "Add Todo"}
                </h2>
                <input
                  style={styles.modalInput}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder="Todo name"
                  autoFocus
                />
                <input
                  style={styles.modalInput}
                  type="text"
                  value={descriptionValue}
                  onChange={e => setDescriptionValue(e.target.value)}
                  placeholder="Description"
                />
                <div style={styles.modalButtonRow}>
                  <button style={!inputValue.trim() ? styles.disableButton : styles.button} onClick={handleSave}>
                    {isEditing ? "Save" : "Add"}
                  </button>
                  <button style={styles.button} onClick={handleModalClose}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </main>
      )}
    </Authenticator>
  );
};

export default App;
