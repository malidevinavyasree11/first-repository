import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const ResultsPage = () => {
  const location = useLocation();
  const [query] = useState(new URLSearchParams(location.search).get('query'));
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data for query:', query); 
      try {
        const apiUrl = `http://localhost:3033/user?data=${query}`;
        console.log('Requesting URL:', apiUrl);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('API Response:', data); 
        const filteredData = data.filter(item => 
          item.title.includes(query) || 
          item.description.includes(query) || 
          item.link.includes(query)
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
    if (query) {
      fetchData();
    }
  }, [query]);
  console.log('Results:', results);
  if (error) return <p>{error}</p>;
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Search Results for "{query}"</h1>
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
