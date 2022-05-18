import { atom, selector } from "recoil";

const list = localStorage.getItem("toDoList");
const listData = JSON.parse(list as any);

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE"
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO
});

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: listData || []
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        localStorage.setItem("toDoList", JSON.stringify(toDos));
        const category = get(categoryState);
        return toDos.filter(toDo => toDo.category === category);
    }
});
