import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";

const Li = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    line-height: 50px;
    span {
        text-indent: 20px;
    }
`;

const Buttons = styled.div`
    display: inline-block;
    button {
        font-size: 18px;
        font-family: "Mali", cursive, sans-serif;
        margin: 0;
        padding: 0 5px;
        border: none;
        outline: none;
        line-height: 50px;
        margin-left: 5px;
        vertical-align: middle;
        background-color: transparent;
        color: white;
        cursor: pointer;
        transition: transform 0.1s linear;
    }
    button:hover {
        color: #55d8c1;
        transform: scale(1.1);
    }
`;

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name }
        } = event;
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = { text, id, category: name as any };
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1)
            ];
        });
    };
    const onDelete = () => {
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            return [
                ...oldToDos.slice(0, targetIndex),
                ...oldToDos.slice(targetIndex + 1)
            ];
        });
    };

    return (
        <Li>
            <span>{text}</span>
            <Buttons>
                {category !== Categories.DOING && (
                    <button name={Categories.DOING} onClick={onClick}>
                        Doing🌞
                    </button>
                )}
                {category !== Categories.TO_DO && (
                    <button name={Categories.TO_DO} onClick={onClick}>
                        To Do📝
                    </button>
                )}
                {category !== Categories.DONE && (
                    <button name={Categories.DONE} onClick={onClick}>
                        Done🌈
                    </button>
                )}
                <button onClick={onDelete}>❌</button>
            </Buttons>
        </Li>
    );
}

export default ToDo;
