import React, { useState } from 'react'
import './App.css'

function App() {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  async function handleSubmitTodo(e:React.FormEvent) {
    e.preventDefault()
    console.log(title)
    console.log(desc)
    fetch("http://localhost:3030/todos/add", {
      method: "post",
      body: JSON.stringify({title, desc}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    setTitle('')
    setDesc('')
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmitTodo}>
        <label htmlFor='todo-title'>Title</label>
        <input id='todo-title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
        <label htmlFor='todo-desc'>Description</label>
        <input id='todo-desc'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
