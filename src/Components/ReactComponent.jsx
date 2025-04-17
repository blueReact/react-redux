import { useState } from "react";

const ReactComponent = () => {
    const [val, setVal] = useState(0);
    return (
        <button onClick={() => setVal(val + 1)}>
            React: {val}
        </button>
    )
}

export default ReactComponent;