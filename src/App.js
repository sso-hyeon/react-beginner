import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

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
            <h1>
                My To Dos{" "}
                <span
                    style={{
                        backgroundColor: "yellowgreen",
                        display: "inline-block",
                        width: "40px",
                        textAlign: "center",
                        lineHeight: "40px",
                        borderRadius: "50%",
                        color: "#fff"
                    }}
                >
                    {toDos.length}
                </span>
            </h1>
            <form onSubmit={onSubmit}>
                <Input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                    style={{ width: "300px", marginRight: "10px" }}
                />
                <Button type="primary" htmlType="submit">
                    Add To Do
                </Button>
            </form>
            <hr style={{ margin: "20px 0" }} />
            <List bordered size="small" dataSource={toDos} renderItem={item => <List.Item>{item}</List.Item>} />
        </div>
    );
}

export default App;
