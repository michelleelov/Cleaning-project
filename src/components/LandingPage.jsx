import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';

const LandingPage = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate()

    const redirectToBookingPage = () => {
        navigate("/booking", { state: { username } })
    }

    return (
        <div>
            <Header></Header>
            <h1>Välkommen!</h1>
            <p>Ange ditt namn nedan</p>
            <input
                type="text"
                placeholder="Användarnamn"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={redirectToBookingPage}>Logga in!</button>
        </div >
    );
}

export default LandingPage;