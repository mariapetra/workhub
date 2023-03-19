import React from "react";

export default function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password:"
        />
        <button type="submit">Login</button>
      </div>
    </form>
  )
}