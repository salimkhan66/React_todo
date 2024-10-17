import React, { useState } from 'react'

function Counter() {
    const [count, setCount] =useState(0);
  
  return (
    <div className='container w-full h-screen   bg-gray-600'>
        <div className=" bg-white w-1/2  flex items-center justify-evenly rounded py-6  text-center">
        
         <button className='btn bg-green-600 font-semibold text-white px-4 py-1 rounded' onClick={()=>setCount(count+1)}>Increase</button>
           <p className='text-2xl'>{count}</p>

            <button className='btn bg-green-600 font-semibold text-white px-4 py-1 rounded' onClick={()=>setCount(count-1)}>Decrese</button>
            
        </div>

    </div>
  )
}

export default Counter