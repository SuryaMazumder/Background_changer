import { useState } from 'react'
import './App.css'


function App() {
  
 let [color,setColor]=useState('blue')
  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}> 
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-lg">
        <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:'red'}} onClick={()=>{setColor('red')}}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:'blue'}}  onClick={()=>{setColor('blue')}} >Blue</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:'green'}}  onClick={()=>{setColor('green')}}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'gray'}}  onClick={()=>{setColor('gray')}}>Gray</button>

        </div>
      </div>
     </div>
  
    </>
  )
}

export default App
