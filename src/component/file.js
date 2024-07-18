import React, { useState } from "react";
import "./File.css";

const File = () => {
    const [num, setNum] = useState(0);
    const increase = () => {
        setNum(num + 1);
    };
    const decrease = () => {
        setNum(num - 1);
    };
    const reset = () => {
        setNum(0);
    }

    return (
        <div>
            <h1>Counter App</h1>
            <h2>{num}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>

        </div >
    );
};

export default File;