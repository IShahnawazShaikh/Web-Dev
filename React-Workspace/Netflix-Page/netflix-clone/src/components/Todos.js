import React, {useState,useEffect} from 'react'
import axios from 'axios';

const API_URL="https://jsonplaceholder.typicode.com/todos/";
export default function Todos() {
    const [isLoading, setIsLoading] = useState(true);
    const [todosList,setTodosList]=useState([]);
    const fetchData=async()=>{
      let res=await axios.get(API_URL); /* await is used when we wait until response not come else we will get empty response */
      //console.log(res.data); 
      setTodosList(res.data);
      setIsLoading(false);
    }
    /* Use Effect render once if we pass empty array, its rendering depends on array values*/
    useEffect(()=>{
       fetchData();
    },[]);
    
    console.log("todosList",todosList);
    if(isLoading){
      return <p>Todo list is loading...</p>
    }
    else{
        return (
            <div>
               <h2>All Todos</h2>  
                {
                 todosList.map((todo)=>{
                   return (
                    <>
                      <span>{todo.id} </span>
                      <span>{todo.title}</span>
                      <br></br>
                    </>
                   );
                 })
                }
            </div>
        )
    }
  
}
