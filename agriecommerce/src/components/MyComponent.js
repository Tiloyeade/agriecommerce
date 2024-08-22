import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Make a GET request to fetch data from the Express server
        axios.get('http://localhost:5000/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Data from Express Server:</h1>
            {data && (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyComponent;
