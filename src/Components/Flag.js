import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Flag({ flag: { population, region, flags, name, capital } }) {
    return (
        <Link className='flag' style={{textDecoration:"none", color:"black"}} to={`/${name.common}`}>
        <div className='submain'>
            <div className='sora'>
                <img className='all-img' src={flags.png} alt={name} />
            </div>
            <div className='details'>
                <h3>{name.common}</h3>
                <p>Population : {population}</p>
                <p>Region : {region}</p>
                <p>Capital : {capital}</p>
            </div>
            
            </div>
            </Link>
    )
}

export default Flag