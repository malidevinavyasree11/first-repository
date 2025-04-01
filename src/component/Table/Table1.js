import React,{useEffect,useState} from 'react'
import './Table.css'
function App(){
    const[data,setData]=useState([])
    useEffect(()=>{
      fetch("https://dummyjson.com/users")
      .then((response)=>response.json())
      .then((json)=>setData(json.users))
    },[])
    return(
        <table id="datatable">
            <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>UserName</th>
             <th>Password</th>
             <th>PhoneNumber</th>
             <th>Email</th>
              <th>Gender</th> 
            </tr>
            <tbody>
                {data.map((item)=>(
                   <tr key={item}>
                   <td>{item.id}</td>
                   <td>{item.firstName}</td>
                   <td>{item.lastName}</td>
                   <td>{item.username}</td>
                   <td>{item.password}</td>
                   <td>{item.phone}</td>
                   <td>{item.email}</td>
                   <td>{item.gender}</td>
                </tr>
                ))}               
            </tbody>
        </table>
    )
}
export default App; 