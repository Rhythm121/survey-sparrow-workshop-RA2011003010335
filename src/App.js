import React, { useEffect, useState } from 'react';

const App = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://task-rhythm.surveysparrow.com/s/Surveysparrow-workshop/tt-vLzkNCtWHG7QHf6y8CSCAA");
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setResponseData(data);
        } else {
          const dataText = await response.text();
          console.log('Non-JSON Response Data:', dataText);
          // Handle non-JSON response as needed
        }
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    };

    // Call fetchData to initiate the data fetching process
    fetchData();
  }, []); // Empty dependency array means the effect runs once after the initial render

  // Render the fetched data
return null;
};

export default App;
