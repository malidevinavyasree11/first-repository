import React, { useState } from 'react'

const Userlist = () => {
    const[users,setUser]=useState([]);
    const[newUser,setNewUser]=useState({name:'',email:''});
    useEffect(()=>{
        fetch()
        .then((response)=>response.json())
        .then((json)=>setUser(json))
    },[])
    const handleAddUser=()=>{
        setUser([...users,newUser]);
        setNewUser({name:'',email:''})
    }
    const handleDeleteUser=(id)=>{
           setUser(users.filter((users)=>user.id !==id))
    }
  return (
    <div>
        <h3>Userlist</h3>
        <ul>
            
            <li>

            </li>
        </ul>
    </div>
  )
}

export default Userlist
