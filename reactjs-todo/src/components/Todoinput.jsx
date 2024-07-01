import React, { useState } from 'react';

export default function Todoinput(props) {
  const { handleaddTodos } = props; // Correct the function name to match the prop passed
  const [todovalues, settodovalues] = useState('');

  return (
    <header>
      <input 
        value={todovalues} 
        onChange={(e) => settodovalues(e.target.value)} 
        placeholder='ENTER YOUR TASK ... ' 
      />
      <button onClick={() => {
        handleaddTodos(todovalues);
        settodovalues(''); // Clear the input field after adding a todo
      }}>Add</button>
    </header>
  );
}
