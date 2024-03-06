import React from 'react';
import rec

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