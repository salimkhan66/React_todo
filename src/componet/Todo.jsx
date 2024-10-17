import React, { useEffect, useState } from 'react'

function Todo() {
    // ================================get item form localStorage================================
    const getLocalItem=()=>{
        let list=localStorage.getItem('todos');
        if(list){
            return JSON.parse(list);
        }else{
            return [];
        }
    }
       
   

    const [input, setInput] = React.useState('');
    const [todos, setTodos] = React.useState(getLocalItem());
    const [editBox,setEditBox] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!input) return; 
        setTodos([...todos,input]);
        setInput('');
    }
    const inputHandler = (e) => {
        setInput(e.target.value);
        
    }
    const deleteHander = (index) => {
        setTodos(todos.filter((_,i) => i!== index));
        alert("Deleted")
    }
   const editHandler=(index)=>{
    setEditIndex(index);
    setEditBox(true)
   }
   const editInputHandler=(e)=>{
 
       setInput(e.target.value)
       
   }
   const editSubmitHandler=(e)=>{
       e.preventDefault();
  
    if (!input) return; 
    const newTodos = [...todos];
      newTodos[editIndex]=input;
    setTodos(newTodos);
    setInput('');
    setEditBox(false)
   }

//    ==============setitem in localStorage============
   useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
   },[todos]);



  return (
    < div className=" h-screen bg-gray-500 ">
    <div className="todoContiner  border-red-500 flex flex-col items-center justify-center  m-auto w-full h-full">
   
   {
      
      editBox ?<form action="" onSubmit={editSubmitHandler} className='flex'>
    <input type="text" placeholder="Enter your todo's" value={input} onChange={editInputHandler} className='rounded   w-full px-3 py-1 '/>
    <button type="submit" className='btn bg-rose-600 font-semibold px-8 py-2 mx-4 text-white rounded '>edit</button>
</form>: <form action="" onSubmit={submitHandler} className='flex'>
        <input type="text" placeholder="Enter your todo's" value={input} onChange={inputHandler} className='rounded   w-full px-3 py-1 '/>
        <button type="submit" className='btn bg-blue-600 font-semibold px-8 py-2 mx-4 text-white rounded '>add</button>
    </form>
   }
   
 
    <div className=' pt-9 mt-9  w-1/2  text-cenert' >
    


    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6   py-3">
                    work
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit
                </th>
                <th scope="col" className="px-6 text-center py-3">
                   Delete
                </th>
                
               
              
            </tr>
        </thead>
        <tbody className=''>
      
            {
                todos.map((todo, index) => (
                    <tr key={index} className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 capitalize font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {todo}
                        </th>
                        <td className="px-6 py-4 ">
                        <button className='bg-gray-500 rounded font-semibold px-4 py-2 text-white' onClick={()=>editHandler(index)}>Edit</button>
                        </td>
                        <td className="px-6 py-4 text-center">
                            <button className='bg-red-500 rounded font-semibold  px-4 py-2 text-white' onClick={()=>deleteHander(index)}>Delete</button>
                        </td>
                        
                    </tr>
                ))
            }
           
           
        </tbody>
    </table>
</div>




        
     

    </div>
    </div>
    
    

    
    </div>

  

  )
}

export default Todo