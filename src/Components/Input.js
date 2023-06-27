import React from 'react'
import './Input.css'


function Input({ fetching, query, setQuery,fetchingRegion }) {

    

    return (
        <div>
            <form onSubmit={fetching} >
                <input style={{ padding: "15px", width: "30%", margin: "15px" }} onChange={(e) => setQuery(e.target.value)} value={query} />
                <select style={{ float: "right" }} onChange={(event) => fetchingRegion(event.target.value)}>
                    <option value="Europe">Europe</option>
                    <option value="Africa" >Africa</option>
                    <option value="Asia" >Asia</option>
                    <option value="Americas" >America</option>
                    <option value="Oceania" >Oceania</option>
                </select>
            </form>
            

        </div>
    )
}

export default Input