import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './image.png';
const Search = () => {
  const [data, setData] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Data:', data);
    if (data.trim()) {
      navigate(`/results?data=${data}`);
    }
  };
  return (
    <div style={styles.container}>
      <img src={image} alt="Google Logo" style={styles.logo} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search here..."
          value={data}
          onChange={(e) => setData(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  logo: {
    width: '200px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Search;