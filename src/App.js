import React, { useState } from 'react';
import './App.css';
import './styles.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', status: true },
    // More users...
  ]);

  const addUser = (newUser) => {
    // Assign a unique ID based on the current users array length
    newUser.id = users.length ? Math.max(users.map(user => user.id)) + 1 : 1;
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>User Management Dashboard</h1>
      <UserForm onAddUser={addUser} /> {/* Only one instance of UserForm here */}
      <UserList users={users} />
    </div>
  );
}

export default App;
