# Task Organizer

A modern, theme-aware, animated task organizer built with React and AWS Amplify.

## Features

- **Add, Edit, Delete Todos:** Manage your tasks with a beautiful modal interface.
- **Light/Dark Theme:** Instantly switch between light and dark modes.
- **Impressive Animations:** Smooth transitions and animated UI elements.
- **AWS Amplify Backend:** Uses GraphQL API and authentication via AWS Amplify.
- **Responsive Design:** Works great on desktop and mobile.
- **Accessible:** Keyboard and screen reader friendly.
- **Icon-based UI:** Clean, modern look using [react-icons](https://react-icons.github.io/react-icons/).

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- AWS Amplify CLI (`npm install -g @aws-amplify/cli`)
- AWS account

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd to2
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure Amplify (if not already):**

   ```sh
   amplify init
   amplify pull
   ```

4. **Start the app:**
   ```sh
   npm start
   ```

### Build & Deploy

To build and publish your app to AWS Amplify Hosting:

```sh
npm run build
amplify publish
```

## Usage

- Click the **plus icon** to add a new todo.
- Click the **edit icon** to update a todo.
- Click the **trash icon** to delete a todo.
- Use the **moon/sun icon** to toggle between light and dark themes.
- Use the **sign out icon** to log out.

## Tech Stack

- **Frontend:** React, react-icons, CSS-in-JS
- **Backend:** AWS Amplify (GraphQL API, Auth, Hosting)

## Customization

- Update styles in `src/styles.js` for branding or animation tweaks.
- Modify GraphQL schema in Amplify for more fields or features.

## License

MIT

---

**Made with ❤️ using React & AWS Amplify**
