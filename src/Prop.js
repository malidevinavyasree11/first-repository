import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h5>Welcome to my app</h5>
      <h6>count: {count}</h6>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={()=>{if(count>0){setCount(count-1)}}}>Decrement</button>
    </div>
  );
}

export default App;
