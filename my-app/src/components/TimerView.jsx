import { useState } from "react";
import TimerClass from "../components/TimerClass";

function TimerWrapper() {
    const [showTimer, setShowTimer] = useState(true);

    return (
        <>
            {showTimer && <TimerClass />}
            <button onClick={() => setShowTimer(!showTimer)}>
                {showTimer ? "Unmount Timer" : "Mount Timer"}
            </button>
        </>
    );
}

export default TimerWrapper;
