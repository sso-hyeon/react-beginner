import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Container = styled.div`
    width: 700px;
    margin: 0 auto;
`;
const Title = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    line-height: 20vh;
    border-bottom: 1px solid white;
`;

const ToDoBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
    input,
    select,
    button {
        outline: none;
        margin: 0 10px;
        box-sizing: border-box;
        vertical-align: middle;
        line-height: 40px;
        padding: 0;
    }
    input {
        text-indent: 10px;
        font-size: 20px;
        width: 400px;
        font-family: "Mali", cursive;
    }
    select {
        text-indent: 10px;
        font-size: 20px;
        width: 120px;
        font-family: "Mali", cursive;
    }
`;

const List = styled.ul`
    text-align: center;
    li {
        border-bottom: 1px solid #eee;
    }
    li:last-child {
        border-bottom: 0;
    }
`;

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };

    return (
        <Container>
            <Title>To Do List</Title>
            <ToDoBox>
                <select value={category} onInput={onInput}>
                    <option value={Categories.TO_DO}>To Do</option>
                    <option value={Categories.DOING}>Doing</option>
                    <option value={Categories.DONE}>Done</option>
                </select>
                <CreateToDo />
            </ToDoBox>
            <List>
                {toDos?.map(todo => (
                    <ToDo key={todo.id} {...todo} />
                ))}
            </List>
        </Container>
    );
}

export default ToDoList;
