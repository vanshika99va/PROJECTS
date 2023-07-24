import React, {useState} from 'react';
import { Button } from '@mui/material';

const Counter = () =>{
    const [count,setCount]=useState(0);
    const countIncrement = () =>{
        setCount(count+1);
    }
    const countDecrement = () => {
        setCount(count-1);
        if(count >10) setCount(10);
    }
 return <div>
    {count <= 10 ? <p>Count : {count}</p> : <p>Can't go above 10!</p>}
    <Button onClick={countDecrement}>-</Button>
    <Button onClick={countIncrement}>+</Button>
 </div>
}

export default Counter;