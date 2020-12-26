import React,{createContext,useState} from 'react'
export const GlobalState = createContext()

export function Provider(props){
   
    const [city,setCity] = React.useState('London')
    const [country, setCountry] = React.useState('Uk')
    const [load,setLoad] = useState(false)

    const values = {
        city,
        setCity,
        country,
        setCountry,
        setLoad,
        load
    }

    return (
        <GlobalState.Provider value={values}>
            {props.children}
        </GlobalState.Provider>
    )
}
