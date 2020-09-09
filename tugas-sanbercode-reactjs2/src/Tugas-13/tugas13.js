import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Tugas13() {
    const [dataHargaBuah, setDataHargaBuah] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [index, setIndex] = useState(null);
    const [selectedID, setSelectedID] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (dataHargaBuah.length === 0) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
                .then(res => {
                    setDataHargaBuah(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [dataHargaBuah])

    const handleNama = (event) => {
        setName(event.target.value);
    }
    const handleHarga = (event) => {
        setPrice(parseInt(event.target.value));
    }
    const handleBerat = (event) => {
        setWeight(parseInt(event.target.value));
    }

    const clearText = () => {
        setName('');
        setPrice('');
        setWeight('');
        setSelectedID(null);
        setIsEdit(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isEdit) { //tambah      
            const dataBaru = {
                name: name,
                price: price,
                weight: weight
            };
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, dataBaru)
                .then(res => {
                    setDataHargaBuah([...dataHargaBuah, { id: res.data.id, name: name, price: price, weight: weight }])
                })
                .catch((err) => console.log(err));
            clearText();

        } else { //edit
            let dataBaru = {
                name: name,
                price: price,
                weight: weight
            };
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedID}`, dataBaru)
                .then(res => {
                    dataBaru = dataHargaBuah;
                    dataBaru[index].name = res.data.name;
                    dataBaru[index].price = res.data.price;
                    dataBaru[index].weight = res.data.weight;
                    setDataHargaBuah([...dataBaru])
                    clearText();
                    setIsEdit(false);
                })
                .catch((err) => console.log(err));
        }
    }
    const handleEdit = (event) => {
        setName(dataHargaBuah[event.target.id].name);
        setPrice(dataHargaBuah[event.target.id].price);
        setWeight(dataHargaBuah[event.target.id].weight);
        setSelectedID(parseInt(event.target.value));
        setIndex(event.target.id)
        setIsEdit(true);
    }

    const handleHapus = (event) => {
        let idBuah = parseInt(event.target.value);
        let dataBaru = dataHargaBuah.filter(({ id }) => id !== idBuah, 1);
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
        setDataHargaBuah(dataBaru);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ minWidth: 500, maxWidth: 400, width: '40%', margin: '0 auto', marginTop: 50, border: '1px solid #000', borderRadius: 20, backgroundColor: 'white' }}>
                <h1 style={{ textAlign: 'center' }}>Form Tambah Data Buah</h1>
                <div style={{ padding: 20, paddingTop: 0 }}>
                    <div style={{ display: 'block', marginBottom: '1em' }}>
                        <div style={{ display: 'inline-block', width: 150, fontWeight: 'bold', fontSize: 16 }}>Nama Buah</div>
                        <input style={{ display: 'inline-block' }} type="text" onChange={handleNama} value={name} />
                    </div>
                    <div style={{ display: 'block', marginBottom: '1em' }}>
                        <div style={{ display: 'inline-block', width: 150, fontWeight: 'bold', fontSize: 16 }}>Harga</div>
                        <input style={{ display: 'inline-block' }} type="text" onChange={handleHarga} value={price} />
                    </div>
                    <div style={{ display: 'block', marginBottom: '1em' }}>
                        <div style={{ display: 'inline-block', width: 150, fontWeight: 'bold', fontSize: 16 }}>Berat (gram)</div>
                        <input style={{ display: 'inline-block' }} type="text" onChange={handleBerat} value={weight} />
                    </div>
                    <button type="submit" style={{ background: 'white', borderRadius: 20, textDecoration: "none", color: "black", cursor: "pointer" }}>
                        {!isEdit ? 'Simpan' : 'Edit'}
                    </button>
                </div>
            </form>

            <div style={{ minWidth: 350, maxWidth: 700, width: '90%', margin: '0 auto', marginTop: 50, backgroundColor: 'white' }}>
                <h1 style={{ textAlign: 'center' }}>Tabel Data Buah</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th style={{ width: 110 }}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataHargaBuah.map((el, index) => {
                            return (
                                <tr key={index}>
                                    <td>{el.name}</td>
                                    <td>{el.price}</td>
                                    <td>{el.weight / 1000} kg</td>
                                    <td>
                                        <center>
                                            <button value={el.id} id={index} onClick={handleEdit} style={{ background: 'yellow', color: "black", cursor: "pointer" }}>Edit</button>
                                            <button value={el.id} onClick={handleHapus} style={{ background: 'red', color: "black", cursor: "pointer" }}>Hapus</button>
                                        </center>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}