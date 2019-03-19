import React from 'react';

const Member = props => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Member ID: {props.id}</h3>
      <h3>DOB: {props.dob}</h3>
      <h3>Status: {props.status}</h3>
    </div>
  )
}

export default Member;