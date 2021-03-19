import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import axios from "axios"

export default class App extends Component {
  state = {
    users: [],
    isLoading: true
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(users => users.data).then(users => {
      this.setState({
        users, //users:users
        isLoading: false
      })
      console.log(users);
    })
  }

  render() {
    const { isLoading } = this.state
    return (
      <div className="App">
        <h1>Users</h1>
        {isLoading ? "Loading..." : ""}
        {
          this.state.users.map(user =>
            <div key={user.id} className={"userList"}>{user.name} - @{user.username}</div>
          )
        }
      </div>
    )
  }
}
