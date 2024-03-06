import React from 'react';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate()

const goToLandingPage = () => {
    navigate ("/")
}

function PageNotFound() {
  return (<>
    <div>PageNotFound</div>
    <button onClick={goToLandingPage}>Gå tillbaka</button>
  </>)
}

export default PageNotFound