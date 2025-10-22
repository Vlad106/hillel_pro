import React, { useEffect, useRef, useState } from "react";
import "./timer.css";

const LOCALSTORAGE_KEY = "functional_timer_seconds";

export default function TimerFunctional() {
    const [seconds, setSeconds] = useState(() => {
        const saved = localStorage.getItem(LOCALSTORAGE_KEY);
        return saved ? Number(saved) : 0;
    });

  const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef(null);

    const start = () => {
        if (isRunning) return;
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setSeconds(0);
        setIsRunning(false);
    };

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds((s) => s + 1);
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isRunning]);

    useEffect(() => {
        console.log(`Updated: ${seconds}`);
    }, [seconds]);

    useEffect(() => {
        try {
            localStorage.setItem(LOCALSTORAGE_KEY, String(seconds));
        } catch (e) {
            console.warn("Could not save timer to localStorage", e);
        }
    }, [seconds]);

    return (
        <div className="timer-card">
            <h3>Functional Timer</h3>

            {}
            <div className={`timer-display ${isRunning ? "" : "stopped"}`}>
                {seconds} s
            </div>

            <div className="timer-controls">
                <button className="btn" onClick={start} disabled={isRunning}>
                    Start
                </button>
                <button className="btn" onClick={stop} disabled={!isRunning}>
                    Stop
                </button>
                <button className="btn" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
}
