import React from 'react'

const User=({user,onDelete})=>{
  return (
    <div>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
      <button onClick={()=>onDelete(user.id)}>Delete</button>
    </div>
  )
}
export default User
