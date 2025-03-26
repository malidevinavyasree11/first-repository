import React,{useEffect,useState} from 'react'
import './Table.css'
function App(){
    const[data,setData]=useState([])
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response)=>response.json())
      .then((json)=>setData(json))
    },[])
    return(
        <table id="datatable">
            <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            <tbody>
                {data.map((item)=>(
                    <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
                ))}               
            </tbody>
        </table>
    )
}
export default App;