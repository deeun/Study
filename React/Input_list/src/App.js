import { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersLists from './Components/Users/UsersLists';

function App() {
  const [usersList, setUsersList] = useState([]);
  
  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: username, age: age, id: Math.random().toString()}];
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersLists users={usersList} />
    </div>
  );
}

export default App;
