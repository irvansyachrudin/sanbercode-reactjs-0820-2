import React, { useContext } from 'react'
import { BuahContext } from './BuahContext'
import Axios from 'axios'

const BuahForm = () => {
    const [fruits, setFruits, input, setInput, api] = useContext(BuahContext)

    // handler
    const handleChange = (e) => {
        let temp = input
        let value = e.target.value
        switch (e.target.name) {
            case 'name':
                temp.name = value
                setInput({ ...temp })
                break
            case 'weight':
                temp.weight = value
                setInput({ ...temp })
                break
            case 'price':
                temp.price = value
                setInput({ ...temp })
                break
            default:
                break
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.id === 0) {
            Axios.post(api, input)
                .then(res => {
                    setFruits(null)
                    setInput({
                        name: '',
                        weight: 0,
                        price: 0,
                        id: 0
                    })
                })
        } else {
            let temp = fruits
            let data = { name: input.name, weight: input.weight, price: input.price }
            Axios.put(`${api}/${input.id}`, data)
                .then(res => {
                    setFruits(null)
                    setInput({
                        name: '',
                        weight: 0,
                        price: 0,
                        id: 0
                    })
                })
        }

    }

    return (
        <form onSubmit={handleSubmit} style={{ margin: '1rem auto', width: '50%' }}>
            <table>
                <tbody>
                    <tr>
                        <td>Nama </td>
                        <td><input onChange={handleChange} type='text' name='name' value={input.name} /></td>
                    </tr>
                    <tr>
                        <td>Berat </td>
                        <td><input onChange={handleChange} type='number' name='weight' value={input.weight} /></td>
                    </tr>
                    <tr>
                        <td>Harga </td>
                        <td><input onChange={handleChange} type='number' name='price' value={input.price} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button className='btn'>Submit</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default BuahForm 