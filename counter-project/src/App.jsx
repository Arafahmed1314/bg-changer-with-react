import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive");
  return (
 <div className="w-full h-screen duration-500 transition " style={{backgroundColor:color}}>
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-md px-3 py-2 space-x-3">
  <button className=" outline-none px-4 rounded-full shadow-md text-white" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
  <button className=" outline-none px-4 rounded-full shadow-md text-white" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
  <button className=" outline-none px-4 rounded-full shadow-md text-black" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
  <button className=" outline-none px-4 rounded-full shadow-md text-white" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
  <button className=" outline-none px-4 rounded-full shadow-md text-white" style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>gray</button>
</div>
</div>
 </div>
  )
}

export default App
