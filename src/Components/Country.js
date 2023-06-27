import React from 'react'
import axios from 'axios'
import './Country.css'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Country() {
    const [countries, setCountries] = useState([])
    const { name } = useParams();
    /*
  fetchSingleCountry()*/

    useEffect(() => {
        const fetchSingleCountry = () => {
            axios.get(`https://restcountries.com/v3.1/name/${name}`).then((res) => {
                console.log(res.data)
                setCountries(res.data)
            })
        }
        fetchSingleCountry()

    }, [name])
    return (
        <>
            <section>
                {countries.map((country) => {
                    return (
                        <div className='country-main'>
                            <div className='country-img'>
                                <img src={country.flags.png} alt={country.name.common} />
                            </div>
                            <div className='country-details'>
                                <h1>{country.name.common}</h1>
                                <p>Capital:{country.capital}</p>
                                <p>Population:{country.population}</p>
                                <p>Region:{country.region}</p>
                                <p>Sub Region:{country.subregion}</p>
                                <Link to={"/"}>
                                    <button>
                                        Back
                                    </button>
                                </Link>


                            </div>
                        </div>
                    )
                })}

            </section>

        </>


    )
}

export default Country