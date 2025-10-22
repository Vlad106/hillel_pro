import React, { useState } from "react";
import TimerFunctional from "./UseTimer.jsx";

export default function TimerDemo() {
    const [show, setShow] = useState(true);

    return (
        <div>
            <h2>Timer</h2>
            <div style={{ marginBottom: 12 }}>
                <button
                    className="btn"
                    onClick={() => setShow((s) => !s)}
                >
                    {show ? "Making timer" : "Mount Timer"}
                </button>
            </div>

            <div>{show ? <TimerFunctional /> : <p>Timer unmounted.</p>}</div>
        </div>
    );
}
