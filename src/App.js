import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserForm from "./UserForm";
import UserList from "./UserList";
import PersonForm from './PersonForm';
import PersonList from './PersonList';


function App() {
  const [updateList, setUpdateList] = useState(false);

  return (
      <Router>
        <Routes>
        <Route path="/usuario" element={
         <div>
         <UserForm onUserAdded={() => setUpdateList(!updateList)} />
         <UserList key={updateList} />
       </div>
        } />

<Route path="/pessoa" element={
          <>
            <PersonForm onPersonAdded={() => setUpdateList(!updateList)}/>
            <PersonList key={updateList} />
          </>
        } />
      </Routes>
      </Router>
  );
}

export default App;