import React, { Component } from 'react';

class Buah extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemBuah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 }
            ],
            namaBuah: "",
            hargaBuah: "",
            beratBuah: "",
            index: -1,
        }

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event) {
        event.preventDefault()
        var index = this.state.index
        var namaBuah = this.state.namaBuah
        var hargaBuah = parseInt(this.state.hargaBuah)
        var beratBuah = parseFloat(parseInt(this.state.beratBuah) / 1000)
        var buah = { nama: namaBuah, harga: hargaBuah, berat: beratBuah }

        if (index === -1) {
            // add new item
            this.setState({
                itemBuah: [...this.state.itemBuah, buah],
                namaBuah: "",
                hargaBuah: "",
                beratBuah: "",
                index: -1,
            })
        } else {
            // update or edit item
            var newItemBuah = this.state.itemBuah
            newItemBuah[index] = buah

            this.setState({
                itemBuah: [...newItemBuah],
                namaBuah: "",
                hargaBuah: "",
                beratBuah: "",
                index: -1,
            })
        }
    }

    deleteForm = (event) => {
        var index = event.target.value
        var item = this.state.itemBuah
        item.splice(index, 1)

        this.setState({
            itemBuah: [...item],
            namaBuah: "",
            hargaBuah: "",
            beratBuah: "",
            index: -1,
        })
    }

    editForm = (event) => {
        var index = event.target.value
        var editNamaBuah = this.state.itemBuah[index].nama
        var editHargaBuah = this.state.itemBuah[index].harga
        var editBeratBuah = this.state.itemBuah[index].berat

        this.setState({
            namaBuah: editNamaBuah,
            hargaBuah: editHargaBuah,
            beratBuah: editBeratBuah,
            index: index
        })
    }

    changeInputNama = (event) => {
        var value = event.target.value
        this.setState({
            namaBuah: value,
        })
    }

    changeInputHarga = (event) => {
        var value = event.target.value
        this.setState({
            hargaBuah: value,
        })
    }

    changeInputBerat = (event) => {
        var value = event.target.value
        this.setState({
            beratBuah: value,
        })
    }

    render() {
        let divStyles = {
            boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
            borderRadius: "5px",
            boxSizing: "border-box",
            padding: "10px",
            margin: "0 auto",
            marginTop: "50px",
            marginLeft: "300px",
            marginRight: "300px"
        }
        return (
            <>
                <div style={divStyles}>
                    {/* Table Buah */}
                    <h1 style={{ textAlign: "center" }}> Daftar Harga Buah</h1>
                    <table style={{ border: "1px solid", width: "60%", margin: "0 auto" }}> {/* width: 40% */}
                        <thead style={{ background: "#aaa" }}>
                            <tr>
                                <th style={{ padding: "10px" }}>Nama</th>
                                <th style={{ padding: "10px" }}>Harga</th>
                                <th style={{ padding: "10px" }}>Berat</th>
                                <th style={{ padding: "10px" }}>Aksi</th>
                            </tr>
                        </thead>
                        <tbody style={{ background: "coral" }}>
                            {this.state.itemBuah.map((val, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td style={{ padding: "10px" }}>{val.nama}</td>
                                            <td style={{ padding: "10px" }}>{val.harga}</td>
                                            <td style={{ padding: "10px" }}>{val.berat / 1000} kg</td>
                                            <td style={{ width: "20%", padding: "10px" }}>
                                                <button value={index} style={{ marginLeft: "10%", background: "#2ded60", cursor: "pointer" }} onClick={this.editForm}>Edit</button> {/* style={{marginRight: "5px"}} */}
                                                <button value={index} style={{ marginLeft: "15px", background: "#ff5757", cursor: "pointer" }} onClick={this.deleteForm}>Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>

                    <br />

                    {/* Form */}
                    <div style={{ width: "50%", margin: "0 auto", marginTop: "20px", border: "1px solid #000", borderRadius: "20px", marginBottom: "20px" }}>
                        <h1 style={{ textAlign: "center" }}>Form Pembelian Buah</h1>
                        <div style={{ padding: "20px", paddingTop: "0px" }}>
                            <form onSubmit={this.submitForm}>
                                <div style={{ display: "block", marginBottom: "1em" }}>
                                    <div style={{ display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "16px" }}>
                                        Nama Buah
                                    </div>
                                    <input required style={{ display: "inline-block" }} type="text" name="name" value={this.state.namaBuah} onChange={this.changeInputNama} />
                                </div>
                                <div style={{ display: "block", marginBottom: "1em" }}>
                                    <div style={{ display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "16px" }}>
                                        Harga Buah
                                    </div>
                                    <input required style={{ display: "inline-block" }} type="number" min="0" name="harga" value={this.state.hargaBuah} onChange={this.changeInputHarga} />
                                </div>
                                <div style={{ display: "block", marginBottom: "1em" }}>
                                    <div style={{ display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "12px" }}>
                                        Berat Buah (Satuan Gram)
                                    </div>
                                    <input required style={{ display: "inline-block" }} type="number" min="0" name="berat" value={this.state.beratBuah} onChange={this.changeInputBerat} />
                                </div>
                                <button style={{ background: "white", borderRadius: "20px", textDecoration: "none", color: "black", cursor: "pointer" }}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

class tugas12 extends Component {
    render() {
        return (
            <>
                <Buah />
            </>
        )
    }
}

export default tugas12;