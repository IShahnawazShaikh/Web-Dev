import React, {useState,useEffect}from 'react'

export default function Todos() {
    const [count, setCount] = useState(0);
    
    /* Use Effect render once if we pass empty array, its rebdering depends on array values*/
    useEffect(()=>{
       console.log("use effect render");
    },[]);
    console.log("redering count: ",count);  /* It showing=> whenver click to increment whole componet is rebdering again n again */ 

    return (
    <div>
       <h2>All Todos</h2>  
       <button onClick={()=>{
          setCount(count+1);
       }}>

        click to increment count={count}   
      </button>     
    </div>
    )
}
