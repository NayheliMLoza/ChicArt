import { useState } from "react";


const Contador = () => {
    const [counter, setCounter] = useState(0);
    return <div>
        
        <h2>{counter}</h2>
        <button onClick={() => {
            setCounter(counter + 1);
        }}
        >Click</button>
    </div>;
};

export default Contador;