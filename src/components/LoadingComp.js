import react from 'react'
import circles from './../circles.svg'

function Loader(){
    return(
        <img src={circles} className="Loading-img" alt="loading-img" />
    )
}

export default Loader