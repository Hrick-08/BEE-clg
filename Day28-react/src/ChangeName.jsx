import { useState } from 'react';

function ChangeName(){
    const [name, setName] = useState('Alice');

    return (
        <div>
            <p>Hello, {name}!</p>
            <button onClick={() => setName('Bob')}>Change Name</button>
        </div>
    );
}

export default ChangeName;