import React, { useState } from "react";
import AddUser from "./components/user/AddUser";
import UserList from "./components/user/UserList";
function App() {
  const [users, setUsers] = useState([]);
  const addNewUser = (username, age) => {
    setUsers((prev) => {
      return [
        ...prev,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser addNewUser={addNewUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
