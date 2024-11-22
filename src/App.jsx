import { useRef } from "react";
import { useDispatch, useSelector,    } from "react-redux";
import { addTodo , removeTodo , updateTodo } from "../configs/reduxconfig/reducers/todoSlice";



const App = () => {
 const input = useRef();
 const dispatch = useDispatch() // for send data
 const selector = useSelector(state => state.todos.todos) // for get data 

 // send data
 const addtodo = () =>{
   dispatch(addTodo({
     title: input.current.value,
     
    }))
    input.current.value= ""
  }

  // delete todo
  const removetodo =(index) =>{
    dispatch(removeTodo( {index} ))
  }
   
  //edit todo

  const editTodo = (index) =>{
    const edit = prompt("updata your item")
    dispatch(updateTodo({
      index,
      title: edit
    }))



  }


  return (
     <>
     <h1 className="text-3xl text-center mt-10">Add Items </h1>
     <div className="text-center mt-11">
     <input type="text" placeholder="Add your list" className="input input-bordered w-full max-w-xs" ref={input}/>
     <button className="btn btn-active btn-primary ms-6" onClick={()=>addtodo()}>Add item</button>
     </div>
      <div className="flex justify-center mt-9">
        
      <table className=" w-96">
      {selector.map((item , index )=>{
        return <tbody key={index}>
        <tr className="">
          <td>{item.title}</td>
          <td><button className="btn btn-sm btn-error ms-6 mt-2" onClick={()=>{ removetodo(index)}}>Delete</button></td>
          <td><button className="btn btn-sm btn-primary  ms-6 mt-2"  onClick={()=>{ editTodo(index)}} >Edit</button></td>
        </tr>
      </tbody>
      })}  
      
    </table>
      </div>

     </>
  )
}

export default App