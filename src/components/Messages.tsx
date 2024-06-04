import React from "react";
import UseTransitionDemo from "../controls/UseTransitionDemo";
import UseLayoutEffectDemo from "../controls/UseLayoutEffectDemo";
import useExecuteAsync from "../hooks/useExecuteAsync";


const Messages = () => {

    // { DataIsLoaded: false, items: [], message: error.Message }

    return (
        <>
            <h1>Messages Page</h1>

            <div style={{ height: "100vh", width: "100%", backgroundColor: "ButtonFace" }} ></div>
            {/* 
      <UseLayoutEffectDemo />
      <UseTransitionDemo /> */}
        </>
    );
};

export default Messages;
