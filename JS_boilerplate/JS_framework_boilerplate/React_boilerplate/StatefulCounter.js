import React, { useState, useEffect } from 'react'

function Example () {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`; 
    });

    return (
        <div>
            <p>
                <button onClick={() => setCount(count + 1)}>
                    Click me 
                </button>
            </p>
        </div>
     );
    };