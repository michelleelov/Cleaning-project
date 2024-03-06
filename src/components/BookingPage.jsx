import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const BookingPage = () => {
    const location = useLocation();
    const { username } = location.state;



    return (
        <>
            <h1>{username}s bokningssida</h1>


        </>
    )}


export default BookingPage;
