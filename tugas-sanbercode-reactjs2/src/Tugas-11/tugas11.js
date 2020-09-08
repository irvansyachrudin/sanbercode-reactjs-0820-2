import React, { Component } from "react";

class tugas11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // https://openclassrooms.com/en/courses/4286486-build-web-apps-with-reactjs/4286711-build-a-ticking-clock-component
            time: new Date().toLocaleTimeString(),
            // Had been tested with 5 seconds, it works
            seconds: 100,
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
        this.myInterval = setInterval(() => {
            const { seconds } = this.state;
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1,
                }));
            } else {
                clearInterval(this.myInterval);
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
        clearInterval(this.myInterval);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString(),
        });
    }

    render() {
        const { seconds } = this.state;
        return (
            <div>
                {seconds === 0 ? (
                    <h1></h1>
                ) : (
                        <h1>
                            Sekarang jam: {this.state.time} &nbsp; Hitung mundur: {seconds}
                        </h1>
                    )}
            </div>
        );
    }
}

export default tugas11;