import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../App.css';
import Input from "./Input"
import Flags from "./Flags"

function Main() {
    const [flags, setFlags] = useState([])
    const [query, setQuery] = useState("")
    const fetching = (e) => {
        e.preventDefault()
        axios.get(`https://restcountries.com/v3.1/name/${query}`).then((res) => {
            setFlags(res.data)

        })

    }
    const fetchingRegion = (region) => {
        axios.get(`https://restcountries.com/v3.1/region/${region}`)
            .then((res) => {
                setFlags(res.data)

            })

    }
    const fetchingall = (e) => {
        axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
            console.log(res.data)
            setFlags(res.data)

        })

    }

    useEffect(() => {
        fetchingall()
    },
        [])
    return (
        <div>
            {!flags ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <Input fetchingRegion={fetchingRegion} flags={flags} fetching={fetching} query={query} setQuery={setQuery} />
                    <Flags flags={flags} setFlags={setFlags} />
                </div>
            )
            }

        </div>
    )
}

export default Main

//    < button onClick = { fetchingall } > ssss</ >
