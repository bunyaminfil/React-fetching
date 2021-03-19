import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    users: [],
    isLoading: true
  }
  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).then(users => {
        this.setState({
          users, //users:users
          isLoading: false
        })
        console.log(users);
      })
    }, 3000);
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
