import React, { useState, useTransition } from "react";

const defaultList = [1, 2, 3, 4, 5]

const UseTransitionDemo = () => {

    const [name, setName] = useState("")
    const [list, setList] = useState(defaultList);
    const [isPending, startTransition] = useTransition();
    const sizeOfList = 10000;

    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);

        startTransition(() => {
            const data = [];
            for (let i = 0; i < sizeOfList; i++) {
                data[i] = value;
            }
            setList(data)
        })
    }
    return (
        <>
            <h1>UseTransitionDemo Page</h1>
            <input type="text" value={name} onChange={handleChange} />
            {isPending ? (<p>loading....</p>) : (
                list.map((item, i) => {
                    return <p key={i}>List item: {item}</p>
                })
            )}
        </>
    );
};

export default UseTransitionDemo;
