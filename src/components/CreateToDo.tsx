import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

const AddBtn = styled.button`
    background-color: transparent;
    font-size: 30px;
    width: 40px;
    color: white;
    border: 1px solid white;
    &:hover {
        color: #55d8c1;
        border: 1px solid #55d8c1;
    }
`;

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValue = ({ toDo }: IForm) => {
        setToDos(oldToDos => [{ text: toDo, id: Date.now(), category }, ...oldToDos]);
        setValue("toDo", "");
    };

    return (
        <form onSubmit={handleSubmit(handleValue)}>
            <input
                {...register("toDo", { required: "Please write a To Do" })}
                placeholder="Write a to do"
            />
            <AddBtn>+</AddBtn>
        </form>
    );
}

export default CreateToDo;
