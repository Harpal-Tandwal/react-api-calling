import React ,{useState} from "react"
import News from "./News";

const Navbar = () => {
  const [val ,setVal]= useState("tesla")
  const [inputState, setInput] = useState("")

  const handelInput =(e)=>{
    setInput(e.target.value);
  }
 
   return (
   <>
 
    <div className="navbar">
    <a  onClick={()=>setVal("tesla")}> TESLAA</a>
    <a  onClick={()=>setVal("bitcoin")}> BITCOIN </a>
    <a  onClick={()=>setVal("icc")}> ICC  </a>
    <a onClick={()=>setVal("fifa")}> FIFA </a>
    <a onClick={()=>setVal("india")}> INDIA </a>
    

    <input type="text"  placeholder="search..." onChange={handelInput}></input>
    <button onClick={()=>setVal(inputState)}>Search</button>

    </div>
    {console.log( "query passed to news component :",val)}
    <News  query={val}/>
   </>
    
  )
}

export default Navbar