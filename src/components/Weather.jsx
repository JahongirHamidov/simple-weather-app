import React from 'react'

export const Weather= (props) =>{
    const {data} = props
    
    
    return (
        <div className="container text-center">
            <div className="cards">
                <h1 className='text-center'>{data.name}</h1>

                <h5 className="py-4">
                    <i className={`wi ${props.icon.Thunderstorm} display-1`}></i>
                </h5>
                <h1 className="py-2">{kelvinToCelcius(data.main.temp)}&deg;</h1>
                    {minmaxTemp(kelvinToCelcius(data.main.temp_min), kelvinToCelcius(data.main.temp_max))}
                <h4 className="py-3">{data.weather[0].description}</h4>
            </div>
        </div>
    )
}

function minmaxTemp(min,max){
    return(
        <h3 className='text-center'>
            <span className='px-4'>{min}&deg;</span>
            <span className='px-4'>{max}&deg;</span>
        </h3>
    )
}
function kelvinToCelcius(degree){
    return(Math.round(degree-273.15))
}
