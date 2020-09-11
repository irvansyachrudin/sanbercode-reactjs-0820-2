import React from "react"

const GantiTema = () => {

    const darkMode = () => {
        var target = document.querySelectorAll(".navbar")
        target.forEach(element => {
            element.classList.toggle("black-theme-nav")
        });


    }

    return (
        <div style={{ marginTop: 100 }}>
            <h3>Click This Button To Change Theme</h3>
            <button onClick={darkMode}>Change Theme</button>
        </div>
    )
}

export default GantiTema