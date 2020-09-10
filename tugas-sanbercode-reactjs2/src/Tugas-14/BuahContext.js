import React, { useState, createContext } from 'react'

export const BuahContext = createContext()

export const BuahProvider = props => {
    const [fruits, setFruits] = useState(null)
    const [api] = useState(`http://backendexample.sanbercloud.com/api/fruits`)
    const [input, setInput] = useState({
        name: '',
        weight: 0,
        price: 0,
        id: 0
    })

    return (
        <BuahContext.Provider value={[fruits, setFruits, input, setInput, api]}>
            {props.children}
        </BuahContext.Provider>
    )
} 