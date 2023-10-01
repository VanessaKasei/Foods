import React,{useState} from "react";

/*const StateTutorial = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    return(
        <div>
            {counter}
            <button onClick={increment}>Increment</button>
        </div>
    );
};*/

const StateTutorial = () =>{
    const [ inputValue, setInputValue] = useState ("yellow");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };
    return(
        <div>
            {inputValue}
            <input placeholder="enter something..."  onChange={onChange}/>
        </div>
    );
};

export default StateTutorial;