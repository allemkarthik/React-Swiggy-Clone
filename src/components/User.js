import { useState } from "react"
const User=(props)=>{
    const [count, setcount]=useState(1)
    
    return(
        <div className="user-card">
            <h1>count: {count}</h1>
            <button onClick={()=>{
                setcount(count+1)

            }}>count increase</button>
            
            <h1>name: {props.name}</h1>
            <h3>Location: Seattle, WA</h3>
            <h3>mailto: allemkarthik@gmail.com</h3>
        </div>
    )
}
export default User