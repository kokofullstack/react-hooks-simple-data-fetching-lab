// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setImageUrl(data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
