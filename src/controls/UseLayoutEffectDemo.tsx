import React, { useEffect, useLayoutEffect, useState } from "react";



const UseLayoutEffectDemo = () => {

    const [value, setValue] = useState("test");

    useLayoutEffect(() => {

        console.log("UseLayoutEffect is called with the value ", value)

        return () => {
            console.log("UseLayoutEffect exit is called with the value ", value)
        };
    }, [value])

    useEffect(() => {
        console.log("useEffect is updated the value as ", value);
    }, [value]);

    setTimeout(() => {
        setValue("Rupesh Telang");
    }, 2000);

    return (
        <>
            <h1>UseLayoutEffectDemo Page</h1>
            <div style={{ textAlign: "center", margin: "auto" }}>
                <h1 >
                    {value} is updated.
                </h1>
            </div>
        </>
    );
};

export default UseLayoutEffectDemo;
