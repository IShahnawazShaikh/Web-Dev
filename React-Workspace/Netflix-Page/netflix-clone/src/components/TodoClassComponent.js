import React, { Component } from 'react'
import axios from 'axios';
import Todo from './Todo';
const API_URL="https://jsonplaceholder.typicode.com/todos/";
export default class TodoClassComponent extends Component {
    state={
        isLoading: true,
        todosList:[], 
     };
    async componentDidMount(){
       let res=await axios.get(API_URL);
       this.setState({isLoading:false,todosList: res.data});  
       console.log(this.state.todosList); 
     }
    render() {

        return (
            <div>
                {this.state.isLoading ? 
                 <p>data is Loading...</p>
                :
                this.state.todosList.map((todo,index)=>{
                  return <Todo key={index} todo={todo}/>
                })
                }  
            </div>
        );
        
     
    }
}

