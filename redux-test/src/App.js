import React, { useState } from 'react';
import './App.css';
import Member from './Components/Member';

const App = () => {

  const [memberState, useMemberState] = useState({
    member: {
      name: 'name',
      id: 'id',
      dob: 'dob',
      status: 'status'
    }

  })


  const clickHandler = () => {
    useMemberState({
      member: {
        name: 'Phil',
        id: '1',
        dob: '1/1/11',
        status: 'Active'
      }
    })
  }

  return (
    <div className="App">
      <Member
        name={memberState.member.name}
        id={memberState.member.id}
        dob={memberState.member.dob}
        status={memberState.member.status}
      />
      <button onClick={clickHandler}>Change</button>
    </div>
  );

}

export default App;