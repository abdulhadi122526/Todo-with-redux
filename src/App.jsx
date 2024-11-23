import { useRef } from "react";
import { useDispatch, useSelector,    } from "react-redux";
import { addTodo , removeTodo , updateTodo } from "../configs/reduxconfig/reducers/todoSlice";
import Swal from "sweetalert2";



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
  console.log();
  

  // delete todo
  const deleteTodo =(index) =>{
    dispatch(removeTodo( {index} ))
  }
   
  //edit todo
  const editTodo = async (index  ) =>{

    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Edit",
      inputPlaceholder: "Edit your items...",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    });
    if (text) {
      // Swal.fire(text);

      dispatch(updateTodo({
        index,      
        title:  text
      }))
    }
 
  
  }
    




  return (
     <>
     <h1 className="text-3xl text-center mt-10">Add Items </h1>
     <div className="text-center mt-11">
     <input type="text"  placeholder="Add your list" className="input input-bordered w-full max-w-xs" ref={input}/>
      <button  className="btn btn-active btn-primary ms-6" onClick={()=>addtodo()}>Add item</button> 
     </div>
      <div className="flex justify-center mt-9">
        
      <table className=" w-96">
      {selector.map((item , index )=>{
        return <tbody key={index}>
        <tr className="">
          <td>{item.title}</td>
          <td><button className="btn btn-sm btn-error ms-6 mt-2" onClick={()=>{ deleteTodo(index)}}>Delete</button></td>
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