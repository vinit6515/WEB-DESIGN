import { useState } from "react";

export default function LazyLoader(){
    var element = document.getElementById("lazy-load");
    let arr =["LazyPage Loading","Page Loaded Successful"];
    const [count,setCount]=useState(0);
    setTimeout(()=> setCount((count+1)%2),2000);
    return(
        <div id="lazy-load">
            {arr[count]}
        </div>
    );
}