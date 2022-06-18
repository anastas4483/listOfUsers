import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { HomePage } from "./pages/HomePage"
import { Provider } from "react-redux"
import store from "./store"

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
)

export default App
