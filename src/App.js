import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Input, Button } from "antd";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = event => setToDo(event.target.value);
    const onSubmit = event => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos(currentArray => [toDo, ...currentArray]);
        setToDo("");
    };
    return (
        <div style={{ margin: "10px 20px" }}>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <Input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                    style={{ width: "300px", marginRight: "10px" }}
                />
                <Button type="primary">Add To Do</Button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
