import React, { Component } from "react";

class TimerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: Number(localStorage.getItem("timer")) || 0,
            isRunning: false,
        };
        this.interval = null;
    }

    componentDidMount() {
        console.log("Timer mounted ✅");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.seconds !== this.state.seconds) {
            console.log(`Updated: ${this.state.seconds}`);
            localStorage.setItem("timer", this.state.seconds);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("Timer unmounted ❌");
    }

    start = () => {
        if (this.state.isRunning) return;

        this.setState({ isRunning: true });
        this.interval = setInterval(() => {
            this.setState((prev) => ({ seconds: prev.seconds + 1 }));
        }, 1000);
    };

    stop = () => {
        this.setState({ isRunning: false });
        clearInterval(this.interval);
    };

    reset = () => {
        this.setState({ seconds: 0 });
        localStorage.removeItem("timer");
    };

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.isRunning ? "black" : "red" }}>
                    {this.state.seconds} сек
                </h1>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default TimerClass;
