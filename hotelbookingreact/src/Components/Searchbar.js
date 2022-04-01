import React from 'react'

export default function Searchbar() {
    return (
        <div className='container my-5'>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter City Name" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search Hotel</button>
            </div>
        </div>
        </div>
    )
}
