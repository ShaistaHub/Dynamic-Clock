import { useState } from "react"


function App(){
  const [date, setDate] = useState(0)

useEffect(() =>{
  setInterval(()=>{
    const newdate = new Date()
    setDate(newdate.toLocaleTimeString());
  },1000)
},[])
  return(
 <>
 <h2>Current Time <br></br>
  {date} </h2>
 </>
  )
}
export default App