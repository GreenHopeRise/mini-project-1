// my Thinking process:-

import { useState } from "react";

const Counter = () => {
    const [count, setCount]= useState(0)
    const [undo, setUndo] = useState([])
    const [redo, setRedo] = useState([])

    const handleIncrement = ()=>{
        setUndo([...undo,count])
        
        setCount(count+1)
        setRedo([])
    }

    const handleDecrement = ()=> {
        setUndo([...undo, count])
        
        setCount(count-1)
        setRedo([])
    }

    const handleUndo = ()=>{
        if (undo.length === 0)return;
        const last = undo[undo.length-1]
        setUndo(undo.slice(0,-1))
        setRedo([...redo, count])
        setCount(last)
    }

    const handleRedo = ()=>{
        if(redo.length===0)return;
        const last = redo[redo.length-1]
        setRedo(redo.slice(0,-1))
        setUndo([...undo, count])
        setCount(last)

    }

    
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>+ Increment</button>
            <button onClick={handleDecrement}>- Decrement</button>

            <button onClick={handleUndo} >Undo</button>
            <button onClick={handleRedo} >Redo</button>


        </div>
    )
        
};

export default Counter;