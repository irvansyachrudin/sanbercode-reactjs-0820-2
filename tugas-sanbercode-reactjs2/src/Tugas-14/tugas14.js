import React from 'react'
import { BuahProvider } from './BuahContext'
import TabelBuah from './TabelBuah'
import BuahForm from './BuahForm'

const Buah = () => {
    return (
        <BuahProvider>
            <TabelBuah />
            <BuahForm />
        </BuahProvider>
    )
}

export default Buah 