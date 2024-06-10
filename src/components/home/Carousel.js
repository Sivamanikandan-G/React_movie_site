import React from 'react';
import './Carousel.css';

import { Container, Button, Card, CardContent } from '@mui/material';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
// Default theme
import '@splidejs/react-splide/css/sea-green';

const Carousel = ({ films }) => {
    console.log(films);

    function formatDate(inputDate) {
        // Parse the input date
        const dateParts = inputDate.split('-');
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const day = parseInt(dateParts[2]);

        // Create a Date object
        const formattedDate = new Date(year, month - 1, day);

        // Get the month name
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const monthName = monthNames[formattedDate.getMonth()];

        // Format the date
        const formattedString = `${day} ${monthName}, ${year}`;

        return formattedString;
    }

    return (
        <Container className='splide__container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} disableGutters maxWidth='xl'>
            <div className='wrapper'>
                <Splide hasTrack={false} options={{
                    type: 'loop',
                    perPage: 3,
                    focus: 'center',
                    // autoplay: true,
                    interval: 5000,
                    lazyLoad: 'nearby',
                    // pagination: false,
                    updateOnMove: true,
                    breakpoints: {
                        1400: {
                            pagination: false,
                        },
                        960: {
                            pagination: false,
                        }
                    }
                }}>
                    <SplideTrack>
                        {films.map(film => (
                            film.poster_path &&
                            <SplideSlide key={film.film_id} className='splide__slide'>
                                <div className='poster__container'>
                                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt='images' />
                                    <Card className='film__info' sx={{ backgroundColor: 'transparent', color: '#fff', boxShadow: 'none'}}>
                                        <CardContent key={film.film_id} className='film__title' sx={{ padding: '0 0 0.5em 0'}}> {film.title} </CardContent>
                                        <CardContent key={film.film_id} className='film__date' sx={{ padding: '0 0 0.5em 0'}}> {formatDate(film.release_date)} </CardContent>
                                        <Button variant="contained"> <BookOnlineOutlinedIcon sx={{paddingRight: '10px', fontSize:'medium', verticalAlign: 'middle'}}></BookOnlineOutlinedIcon> Get Ticket</Button>
                                        {/* <Button variant="contained"> <BookOnlineOutlinedIcon sx={{paddingRight: '10px', fontSize:'medium', verticalAlign: 'middle'}}></BookOnlineOutlinedIcon> Watch trailer</Button> */}
                                    </Card>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>
            </div>
        </Container>

        // <Container className='splide__container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} disableGutters> 
        //     <Splide hasTrack={false} options={{
        //         type: 'loop',
        //         perPage: 3,
        //         focus: 'center',
        //         autoplay: true,
        //         interval: 8000,
        //         flickMaxPages: 2,
        //         updateOnMove: true,
        //         pagination: false,
        //         padding: '10%',
        //         throttle: 300,
        //         breakpoints: {
        //         1440: {
        //             perPage: 1,
        //             padding: '30%'
        //         }
        //         }
        //     }}>
        //         <SplideTrack>
        //             {films.map(film => (
        //                 <SplideSlide key={film.film_id} className='splide__slide'>
        //                     <div className='poster__container'>
        //                         <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt='images' />
        //                     </div>
        //                 </SplideSlide>
        //             ))}
        //         </SplideTrack>
        //     </Splide>
        // </Container>

    )
}

export default Carousel