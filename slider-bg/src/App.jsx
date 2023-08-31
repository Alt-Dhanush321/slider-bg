import React,{useState} from 'react'
import {images} from './assets/const'

function App() {

  const [count, setCount] = useState(0)

  
  return (
    <>
      <div className="body-container w-full h-screen relative slide-left ">
        <video src={images[count].VidSrc} className={'absolute w-full h-full object-cover z-[-10] slide-left '} autoPlay playsInline loop muted>

        </video>
        <div className="container flex w-1/2 justify-between m-auto ">
          
          {
            count != 0 && <button className=' p-5 bg-red-600 text-white font-bold text-2xl' onClick={()=>setCount(count-1)}>{count}</button>
          }
          {
            count != images.length-1 && <button className=' p-5 bg-red-600 text-white font-bold text-2xl' onClick={()=>setCount(count+1)}>{count+1}</button>
          }
        </div>
        </div>      
        
    </>
  )
}

export default App