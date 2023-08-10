import React, { useState, useEffect } from 'react';

const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=education';
const apiKey = 'bE08nSscaJlysmr9PF2nRA==Rf2z5asHSprjI7m4';
const Quotes = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl, {
          headers: { 'X-Api-Key': apiKey },
        });
        if (res.ok) {
          const data = await res.json();
          const dataBody = `${data[0].quote} - ${data[0].author}`;
          setPost(dataBody);
        } else {
          throw new Error('Error Loading Data');
        }
      } catch (error) {
        setError('Error Loading Data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="quotes">
      {loading && <p> Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <p>{ post}</p>
        </div>
      )}
    </div>
  );
};

export default Quotes;
