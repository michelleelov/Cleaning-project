import React {navigate } from 'react'


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