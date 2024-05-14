import { useState } from "react";
export default function BasicCounter(){
    const [count,setCount]=useState(0);
    function changeNum(){
        setCount(count+1);
    }
    function remove(){
        setCount(count-1);
    }
    return(
        <>
        <div>
            Count : {count}
        </div>
        <button onClick={changeNum}> Add</button>
        <button onClick={remove}>Subtract</button>
        </>
    );
}