import React from "react";
import "./tugas10.css";

let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 },
];



class tugas10 extends React.Component {
    render() {
        return (
            <div className="tugas10">
                <h1>Tabel Harga Buah</h1>
                <table>
                    <tr>
                        <td>Nama</td>
                        <td>Harga</td>
                        <td>Berat</td>
                    </tr>
                    {dataHargaBuah.map((e) => {
                        return (
                            <tr>
                                <td>{e.nama}</td>
                                <td>{e.harga}</td>
                                <td>{e.berat}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }
}

export default tugas10;