import React from 'react'
interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async() => {
 const res = await fetch(
  'https://jsonplaceholder.typicode.com/users')
 const users: User[] = await res.json();
  return (
    <>
      <h1 className='font-bold text-3xl'>Users</h1>
      <p className='text-2xl text-pink-800'>{new Date().toLocaleTimeString()}</p>
      <table className='table table-bordered '>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => <tr key = {user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>)}
        </tbody>
        
      </table>
    </>
  )
}

export default UsersPage