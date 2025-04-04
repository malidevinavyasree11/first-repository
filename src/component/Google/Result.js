import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const ResultsPage = () => {
  const location = useLocation();
  const [data] = useState(new URLSearchParams(location.search).get('data'));
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data for:', data);
      try {
        const api = `http://localhost:3034/user?data=${data}`;
        console.log('Requesting URL:', api);
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log('API Response:', responseData);
        const filteredData = responseData.filter(item =>
          item.title.includes(data) ||
          item.description.includes(data) ||
          item.link.includes(data)
        );
        if (filteredData.length > 0) {
          setResults(filteredData);
        } else {
          setError('No data found for this query');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };
    if (data) {
      fetchData();
    }
  }, [data]);

  console.log('Results:', results);
  if (error) return <p>{error}</p>;
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Search Results for "{data}"</h1>
      {results.length > 0 ? (
        <ul style={styles.resultsList}>
          {results.map((user) => (
            <li key={user.title} style={styles.resultItem}>
              <a href={user.link} style={styles.title}>{user.link}</a>
              <p style={styles.link}>{user.title}</p>
              <p style={styles.description}>{user.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  resultsList: {
    listStyleType: 'none',
    padding: 0,
  },
  resultItem: {
    marginBottom: '20px',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '20px',
  },
  title: {
    fontSize: '18px',
    color: '#1a0dab',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '5px',
  },
  link: {
    fontSize: '20px',
    color: '#006621',
    marginBottom: '5px',
  },
  description: {
    fontSize: '14px',
    color: '#545454',
  },
};

export default ResultsPage;