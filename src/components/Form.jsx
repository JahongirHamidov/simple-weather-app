import React from 'react'
import {GlobalState} from '../globalState'

export  function Form(props) {

    const { city,setCity,country,setCountry, setLoad } = React.useContext(GlobalState)

    const cityChange = e => {
        setCity(e.target.value)
    }

    const countryChange = e => {
        setCountry(e.target.value)
    }
    const getData = () => {
        setLoad(true)
    }
    
    return (
        <div className='container'>
                <div className="row py-5">
                    <div className="col-md-3">
                        <input 
                            type='text' 
                            className='form-control' 
                            name='city' 
                            autoComplete='off' 
                            placeholder='City'
                            value={city}
                            onChange={cityChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <input 
                            type='text' 
                            className='form-control'  
                            name='country' 
                            autoComplete='off' 
                            placeholder='Country'
                            value={country}
                            onChange={countryChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <button className='btn btn-warning' onClick={getData}>
                            Get Weather
                        </button>
                    </div>
                </div>
        </div>
    )
}
