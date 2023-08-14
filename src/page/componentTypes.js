import React, { useCallback, useState } from "react";

import CourseItem from "../components/componetTypesItem";

const ItemList = [
    {
        id: 1,
        name: "sura",
        color: "red",
        displayStatus: true,
    },
    {
        id: 2,
        name: "lei",
        color: "black",
        displayStatus: false,
    },
    {
        id: 3,
        name: "he",
        color: "green",
        displayStatus: true,
    },
];

const ComponentType = () => {
    const [showBtn, setShowBtn] = useState(false);
    const toogleBtn = useCallback(() => {
        setShowBtn(val => {
            return !val
        });
    }, []);

    return (
        <div>
            {
                ItemList.map((item, index) =>
                    React.createElement(CourseItem, Object.assign({
                        key: index,
                        showBtn,
                        colorStyle: item.color,
                    }, item))
                )
            }
            <button onClick={toogleBtn}>按钮：{showBtn ? 'on': 'off'}</button>
        </div>
    )
};

export default ComponentType;
