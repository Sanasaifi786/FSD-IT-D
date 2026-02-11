import { useState } from 'react'
import { Header } from './component/header'

function App() {
  const [text,setText] = useState("");
  const [output,setOutput] = useState("");

  const handle = ()=>{
    fetch("http://localhost:5000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({file: text})
    })
    .then(res => res.json())
    .then(data =>{
      setText("");
    })
  }

  const handleRead = ()=>{
    fetch("http://localhost:5000/read")
    .then(res => res.json())
    .then(data =>{
      setOutput(data.content);
    })
  }

  return (
    <>
      <div>
        <Header/>
        <div style={{textAlign:"center"}}>
          <h1>FS Model for Node</h1><br />
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} /><br /> <br />
          <button onClick={handle}>FS Create</button> &nbsp; &nbsp;
          <button onClick={handleRead}>FS Read</button><br /><br />
          <textarea name="" id="" value={output}></textarea>
        </div>
      </div>
      
    </>
  )
}

export default App
