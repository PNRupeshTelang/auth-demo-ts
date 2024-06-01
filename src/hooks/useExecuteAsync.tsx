
import React, { useEffect, useState, useTransition } from 'react';


export default function useExecuteAsync(formData) {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState({ DataIsLoaded: false, items: null, message: '' });
    const [isPending, startTransition] = useTransition();


    startTransition(() => {
        console.log("startTransition", isPending);
        // fetch("https://oneapp.panthernails.com/DPWA/api/device/Execute", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Headers":
        //             "Origin, X-Requested-With, Content-Type, Accept",
        //     },
        //     body: JSON.stringify(formData),
        // })
        //     .then((res) => res.json())
        //     .then((json) => {
        //         setData({ DataIsLoaded: true, items: json.Data, message: json.Message });
        //     })
        //     .catch((error) => {
        //         setData({ DataIsLoaded: false, items: null, message: error.Message });
        //     });

        setData({ DataIsLoaded: true, items: { Name: "rupesh" }, message: "data received" });
    });


    // useEffect(() => {
    //     console.log("useEffect", isPending);
    //     setLoaded(!isPending);
    // }, [isPending])

    return { loaded, data }
}

