import React, {useState} from 'react';

const Counter = () => {
    const [likes, setLikes] = useState(0);
    const [input, setInput] = useState('Какой-нибудь текст');

    function addOne() {
        setLikes(likes + 1);
    }
    function deleteOne() {
        setLikes(likes - 1);
    }
    function reset() {
        setLikes(0);
    }
    return (
        <div>
            <h1>{likes}</h1>
            <h1>{input}</h1>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}/>
            <button onClick={addOne}>increment</button>
            <button onClick={reset}>reset</button>
            <button onClick={deleteOne}>decrement</button>
        </div>
    );
};

export default Counter;