// Theme-aware styles for the App component with animation

const fadeIn = {
    animation: "fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1)"
};

const baseButton = {
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(102, 126, 234, 0.15)",
    transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
    animation: "popIn 0.5s",
};

const getThemeStyles = (theme) => ({
    main: {
        maxWidth: "840px",
        margin: "auto",
        padding: "32px",
        background: theme === "dark"
            ? "linear-gradient(135deg, #23272f 0%, #2d3748 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
        borderRadius: "18px",
        boxShadow: theme === "dark"
            ? "0 8px 32px 0 rgba(0,0,0,0.55)"
            : "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        minHeight: "100vh",
        color: theme === "dark" ? "#f3f4f6" : "#2d3748",
        ...fadeIn,
    },
    header: {
        textAlign: "center",
        color: theme === "dark" ? "#a5b4fc" : "#2d3748",
        fontWeight: 700,
        fontSize: "2.2rem",
        marginBottom: "18px",
        letterSpacing: "1px",
        animation: "slideDown 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
    },
    button: {
        ...baseButton,
        background: theme === "dark"
            ? "linear-gradient(90deg, #6366f1 0%, #a5b4fc 100%)"
            : "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        padding: "10px 22px",
        margin: "0 8px 18px 0",
        fontSize: "1rem",
        boxShadow: theme === "dark"
            ? "0 2px 8px rgba(102, 126, 234, 0.25)"
            : baseButton.boxShadow,
    },
    disableButton: {
        ...baseButton,
        background: theme === "dark"
            ? "linear-gradient(90deg, #4b5563 0%, #6b7280 100%)"
            : "linear-gradient(90deg, #d1d5db 0%, #e5e7eb 100%)",
        padding: "10px 22px",
        margin: "0 8px 18px 0",
        fontSize: "1rem",
        boxShadow: theme === "dark"
            ? "0 2px 8px rgba(107, 114, 128, 0.15)"
            : "0 2px 8px rgba(209, 213, 219, 0.15)",
        cursor: "not-allowed",
        opacity: 0.6,
    }
    ,
    buttonSignOut: {
        ...baseButton,
        background: "linear-gradient(90deg, #ff5858 0%, #f09819 100%)",
        padding: "10px 22px",
        margin: "0 8px 18px 0",
        fontSize: "1rem",
        boxShadow: "0 2px 8px rgba(255, 88, 88, 0.15)",
    },
    updateButton: {
        ...baseButton,
        background: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
        padding: "8px 16px",
        fontSize: "0.95rem",
        marginLeft: "8px",
        boxShadow: "0 2px 8px rgba(67, 233, 123, 0.10)",
        flexShrink: 0,
    },
    ul: {
        listStyle: "none",
        padding: 0,
        marginTop: "24px",
    },
    li: {
        background: theme === "dark" ? "#23272f" : "#fff",
        borderRadius: "8px",
        marginBottom: "14px",
        padding: "16px 20px",
        boxShadow: theme === "dark"
            ? "0 1px 4px rgba(0,0,0,0.25)"
            : "0 1px 4px rgba(0,0,0,0.07)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "1.1rem",
        color: theme === "dark" ? "#f3f4f6" : "#374151",
        transition: "box-shadow 0.2s, transform 0.2s",
        animation: "fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
        minWidth: "0",
        gap: "16px",
    },
    todoName: {
        fontWeight: 600,
        color: theme === "dark" ? "#a5b4fc" : "#4f46e5",
        letterSpacing: "0.5px",
        flex: "1 1 30%",
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        marginRight: "12px",
    },
    todoDescription: {
        color: theme === "dark" ? "#cbd5e1" : "#6b7280",
        fontSize: "0.95rem",
        flex: "2 1 60%",
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        marginRight: "12px",
    },
    deleteButton: {
        ...baseButton,
        background: "linear-gradient(90deg, #ff5858 0%, #f09819 100%)",
        padding: "8px 16px",
        fontSize: "0.95rem",
        boxShadow: "0 2px 8px rgba(255, 88, 88, 0.10)",
        flexShrink: 0,
    },
    cancelButton: {
        ...baseButton,
        background: theme === "dark"
            ? "linear-gradient(90deg, #4b5563 0%, #6b7280 100%)"
            : "linear-gradient(90deg, #d1d5db 0%, #e5e7eb 100%)",
        padding: "8px 16px",
        fontSize: "0.95rem"
    },
    modalOverlay: {
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.35)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.4s"
    },
    modal: {
        background: theme === "dark"
            ? "linear-gradient(120deg, #23272f 0%, #2d3748 100%)"
            : "linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)",
        borderRadius: "20px",
        padding: "36px 32px",
        minWidth: "340px",
        maxWidth: "95vw",
        boxShadow: theme === "dark"
            ? "0 12px 40px 0 rgba(0,0,0,0.35)"
            : "0 12px 40px 0 rgba(31, 38, 135, 0.18)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        animation: "popIn 0.5s",
        alignItems: "stretch",
    },
    modalTitle: {
        margin: 0,
        color: theme === "dark" ? "#a5b4fc" : "#4f46e5",
        fontWeight: 700,
        fontSize: "1.4rem",
        letterSpacing: "1px",
        textAlign: "center",
        animation: "slideDown 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
    },
    modalInput: {
        padding: "12px 16px",
        borderRadius: "8px",
        border: "1.5px solid #cbd5e1",
        fontSize: "1.08rem",
        outline: "none",
        marginBottom: "6px",
        transition: "border 0.2s",
        boxShadow: "0 1px 4px rgba(102, 126, 234, 0.07)",
        background: theme === "dark" ? "#23272f" : "#fff",
        color: theme === "dark" ? "#f3f4f6" : "#23272f",
    },
    modalButtonRow: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "14px"
    },
    buttonRow: {
        display: "flex",
        justifyContent: 'space-between',
    }
});

// Add keyframes to the document head
if (typeof document !== "undefined" && !document.getElementById("custom-animations")) {
    const style = document.createElement("style");
    style.id = "custom-animations";
    style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px);}
      to { opacity: 1; transform: translateY(0);}
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-30px);}
      to { opacity: 1; transform: translateY(0);}
    }
    @keyframes popIn {
      0% { transform: scale(0.7); opacity: 0; }
      80% { transform: scale(1.05); opacity: 1; }
      100% { transform: scale(1); }
    }
  `;
    document.head.appendChild(style);
}

export default getThemeStyles;