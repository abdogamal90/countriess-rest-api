import React from 'react'
import Flag from './Flag'
import '../App.css'

function Flags({ flags }) {

    return (
        
        <div className='main'>
            {flags.map((flag) =>
             <Flag key={flag.cca2} flag={flag} />
          )}
        </div>
    )
}

export default Flags