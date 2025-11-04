import React, { useState } from 'react'

const Count = ()=>{
    const [count,setCount] = useState(0);
    return (
        <div id='counter'>
            <h1>Counter</h1>
            <div className="counter-container">
                <button onClick={()=>setCount(count-1)}>-</button>
                <span>{0}</span>
                <button onClick={()=>setCount(count+1)}>+</button>
                <button onClick={()=>setCount(0)}>reset</button>
            </div>
        </div>
    )
}

export default Count;