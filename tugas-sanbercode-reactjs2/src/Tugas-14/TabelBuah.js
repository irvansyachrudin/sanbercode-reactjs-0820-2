import React, { useContext, useEffect } from 'react'
import { BuahContext } from './BuahContext'
import Axios from 'axios'

const TabelBuah = () => {
    const [fruits, setFruits, , setInput, api] = useContext(BuahContext)

    // effects
    useEffect(() => {
        if (fruits === null) {
            Axios.get(api)
                .then(res => {
                    setFruits(res.data)
                })
        }
    })

    const handleEdit = (e) => {
        let choosen = parseInt(e.target.value)
        let choice = fruits.filter((item) => {
            return item.id === choosen
        })
        choice.map(item => {
            setInput({
                name: item.name,
                weight: item.weight,
                price: item.price,
                id: choosen
            })
            return true
        })
    }

    const handleDelete = (e) => {
        let choosen = parseInt(e.target.value)
        Axios.delete(`${api}/${choosen}`)
            .then(res => {
                setFruits(null)
            })
    }

    return (
        <>
            <table className='tbl'>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Berat</th>
                        <th>Harga</th>
                        <th colSpan={2}>Tombol Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fruits === null ? (<></>) :
                            fruits.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.weight / 1000} Kg</td>
                                        <td>{item.price}</td>
                                        <td><button onClick={handleEdit} value={item.id}>Edit</button></td>
                                        <td><button onClick={handleDelete} value={item.id}>Delete</button></td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TabelBuah