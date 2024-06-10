import React, { useState, useEffect } from 'react';
import './home.css';
import Carousel from './Carousel';
import { Stack } from '@mui/material';

const Home = () => {
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // Function to fetch data from MovieGlu API
            // const apiKey = 'IWJQb7Q3tR7tz9cnvimO91njHi4SyLP35SaxoAhi';
            // const endpoint = 'https://api-gate2.movieglu.com/filmsNowShowing/?n=10';
            // const client = 'TUTO_1';
            // const authorizationToken = 'Basic VFVUT18xX1hYOk96dzUyckZJc0VqUg==';
            // const territory = 'XX';
            // const apiVersion = 'v200';
            // const geolocation = '13.0843;80.2705';
            // const deviceDatetime = '2024-05-06T10:08:42.473Z';

            // const headers = {
            //     'client': client,
            //     'x-api-key': apiKey,
            //     'authorization': authorizationToken,
            //     'territory': territory,
            //     'api-version': apiVersion,
            //     'geolocation': geolocation,
            //     'device-datetime': deviceDatetime
            // };

            // try {
            //     const response = await fetch(endpoint, {
            //         method: 'GET',
            //         headers: headers,
            //     });
            //     const result = await response.json();

            //     // Set the response data in state
            //     setResponseData(result);

            //     // Handle response
            // } catch (error) {
            //     console.error('Error:', error);
            // }

            // Function to fetch data from TMDB API
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDI0ZjE3ODExZjJjNzhiNGNkNTE1YmI5YjgyYTM0MyIsInN1YiI6IjY2MzliODAzYzkwNTRmMDEzMzkxY2QxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YMuBPxawNOlbnqXvksp4Y-tteG82KP1O6oVxiMEG8w4'
                }
            };

            fetch('https://api.themoviedb.org/3/movie/now_playing?page=1&region=IN', options)
                .then(response => response.json())
                .then(response => setResponseData(response))
                .catch(err => console.error(err));
        }

        // Call the function to fetch data
        fetchData();
    }, []); // Empty dependency array ensures that this effect runs only once

    return (
        <Stack>
            {responseData && <Carousel films={responseData.results} />}
        </Stack>
    );
}

export default Home;
