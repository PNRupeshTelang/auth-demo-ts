import React, { useEffect, useState, useTransition } from 'react';

const formData = {
    ActionName:
        "WSM.GMst_SelectFewFromLinkComponentAndComponentPropertyWhereGroupNameSubGroupNamePageName",
    ParameterJSON: JSON.stringify({}),
    SessionDataJSON: JSON.stringify({ CompanyID: 217 }),
    OperationName: "Query"
};

const TransitionDemo = () => {
    const [data, setData] = useState({ DataIsLoaded: false, items: [], message: '' });
    const [isPending, startTransition] = useTransition();



    useEffect(() => { console.log("pending", isPending) }, [isPending])


    const onFetch = () => {
        console.log(data.items.length)

        startTransition(() => {

            var items = []

            for (let i = 0; i < 10000; i++) {
                items[i] = i;
            }

            //setData({ ...data, DataIsLoaded: true, items: items, message: 'Data loaded' });

            fetch("https://oneapp.panthernails.com/DPWA/api/device/Execute", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers":
                        "Origin, X-Requested-With, Content-Type, Accept",
                },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((json) => {
                    setData({ DataIsLoaded: true, items: json.Data, message: json.Message });
                })
                .catch((error) => {
                    setData({ DataIsLoaded: false, items: [], message: error.Message });
                });
        });
    }

    // { DataIsLoaded: false, items: [], message: error.Message }

    return <div>
        <button onClick={() => { onFetch() }}>Fetch</button>

        {!isPending ? (
            <div>
                {data.message}
                {data.items.map((item, index) => {
                    return <p key={index}>List item: {JSON.stringify(item)}</p>
                })}
            </div>
        ) : (<p>loading....</p>)}

    </div>;
};

export default TransitionDemo;
