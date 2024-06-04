import React from "react";
import UseTransitionDemo from "../controls/UseTransitionDemo";
import UseLayoutEffectDemo from "../controls/UseLayoutEffectDemo";
import useExecuteAsync from "../hooks/useExecuteAsync";


const Tasks = () => {

    // { DataIsLoaded: false, items: [], message: error.Message }

    return (
        <>
            <h1>Tasks Page</h1>

            <div style={{ height: "100vh", width: "100%", backgroundColor: "aqua" }} ></div>

            {/* 
      <UseLayoutEffectDemo />
      <UseTransitionDemo /> */}
        </>
    );
};

export default Tasks;
