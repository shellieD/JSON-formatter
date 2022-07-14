import './index.css';
import { useState } from 'react';

const JsonFormatter = () => {
    // const inputArea = document.querySelector(".large-area--input");
    // const outputArea = document.querySelector(".large-area--output");
    // const btnFormat = document.querySelector(".controls__button--format");
    // const btnMinify = document.querySelector(".controls__button--minify");
    const [inputArea, setinputArea] = useState("");
    let [outputArea] = useState(""); 


    const input = e => {
        setinputArea(e.target.value);
      }
    
      console.log(input, "this is the input");

    const formatJson = () =>{
        const formatted = JSON.stringify(JSON.parse(inputArea), null, 4);
        console.log(inputArea, "The format button was pressed");
        console.log(formatted);
        return
    }

    const minifyJson = () =>{
        const minified = JSON.stringify(JSON.parse(inputArea));
        console.log(inputArea, 'The minify button was pressed');
        console.log(minified);
        return
    }
    

    return (
        <div>
            <div className="header">
                <h1>JSON Formatter</h1>
            </div>
            <div className="container">
                <textarea className="large-area large-area--input" placeholder="Enter your JSON here..." input type="text" value={inputArea} onChange={input}>{""}</textarea>
                <div className="controls">
                    <button onClick={() => formatJson()} type="button" className="controls__button controls__button--format">Format</button>
                    <button onClick={() => minifyJson()} type="button" className="controls__button controls__button--minify">Minify</button>
                </div>
                <textarea readOnly className="large-area large-area--output" placeholder="Your JSON will appear here..." value={outputArea}> </textarea>
            </div>
        </div>
    );
}

export default JsonFormatter;