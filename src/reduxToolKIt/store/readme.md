# 📦 React Redux Toolkit 

## 🔍 Why Use Redux Instead of Props?
- Avoids **prop drilling** (passing data through many components).
- Makes data **centralized** and easy to manage across the app.

## 🏪 What is Redux Store?
- A **store** is like a container that holds all global state (data) of your app.
- Components can access or update it using **actions** and **reducers**.

## ⚙️ What is an Action?
- An **action** tells the store **what happened** (e.g., user added, item deleted).

## 🧠 What is a Reducer (State Manager)?
- A **reducer** is a function that listens to actions and **updates the state** accordingly.

## 🧾 Types of Data in Actions

### 🔸 Local Data
- Data like text, numbers, arrays, etc., from forms or buttons.

### 🌐 Data from Internet (Async)
- API data (e.g., user info, product list) can be fetched and stored using **async thunks**.

## Hooks
- useSelector (Read from Store)
- useDispatch (Send Action)

## 📦 Installation Command
```bash
npm install @reduxjs/toolkit react-redux
