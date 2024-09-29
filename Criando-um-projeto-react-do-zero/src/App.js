import React, { useState, useEffect } from "react";

const App = () => {
    const [usuarios, SetUsuarios] = useState(["Pablo", "José", "Manoel"]);
 
    return (
        <div className="App">
            <h1>Hello DIO!</h1>
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    )
};

export default App;