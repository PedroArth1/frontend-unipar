import React, { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";


function App() {
  const [updateList, setUpdateList] = useState(false);

  return (
    <div>
      <UserForm onUserAdded={() => setUpdateList(!updateList)} />
      <UserList key={updateList} />
    </div>
  );
}

export default App;