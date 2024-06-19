import { useEffect, useState } from "react";
import session from "../session.json";
import { useSession } from "../providers/SessionProvider";

export function Execute(oFormData) {
    var sessionData = {
        CompanyID: session.CompanyID,
        SubscriberID: session.SubscriberID,
        AppID: session.AppID,
        AppVersion: session.AppVersion,
        AppPlatform: session.AppPlatform,
    };

    var formData = {
        ...oFormData,
        SessionDataJSON: JSON.stringify({ ...oFormData.SessionDataJSON, ...sessionData }),
    };

    console.log(formData)

    return fetch("https://oneapp.panthernails.com/DPWA/api/device/Execute", {
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
            return { DataIsLoaded: true, items: json.Data, message: json.Message };
        })
        .catch((error) => {
            return { DataIsLoaded: false, items: [], message: error.Message };
        });
}

// export function ExecuteCached(
//     FormData,
//     cacheKey = null,
//     duration = Duration.Minute10
// ) {
//     if (cacheKey != null) {
//         var cookieValue = getCookie(cacheKey);

//         const ExecuteAndSetCacheCookie = () =>
//             Execute(FormData)
//                 .then((response) => {
//                     if (trySetCache(cacheKey, response)) {
//                         setCookie(
//                             cacheKey,
//                             "data",
//                             duration == null ? Duration.Minute : duration
//                         );
//                     }
//                     return response;
//                 })
//                 .catch((error) => {
//                     var response = {
//                         DataIsLoaded: false,
//                         items: null,
//                         message: error.Message,
//                     };
//                     return response;
//                 });

//         if (cookieValue != null) {
//             console.log("inside cookie present");
//             return getCacheAsync(cacheKey)
//                 .then((response) => response)
//                 .catch((error) => {
//                     var response = ExecuteAndSetCacheCookie();
//                     return response;
//                 });
//         } else {
//             console.log("inside cookie absent");
//             var response = ExecuteAndSetCacheCookie();
//             return response;
//         }
//     } else {
//         console.log("When direct service call");
//         return Execute(FormData);
//     }
// }

export function ExecuteCommand(FormData) {
    var oFormData = { ...FormData };
    oFormData.OperationName = "Command";

    return Execute(oFormData);
}

export function ExecuteQuery(FormData) {
    var oFormData = { ...FormData };
    oFormData.OperationName = "Query";

    return Execute(oFormData);
}

export function ExecuteFile(FormData) {
    var oFormData = { ...FormData };
    oFormData.OperationName = "File";

    return Execute(oFormData);
}


export function useApi(ActionName, ParameterJSON, SessionData = null) {
    const [data, setData] = useState({ DataIsLoaded: true, items: [], message: "" });

    useEffect(() => {
        ExecuteQuery({ ActionName, ParameterJSON, SessionDataJSON: SessionData }).then(json => {
            setData({ ...data, ...json });
        });

    }, [ActionName, ParameterJSON]);

    return [data];
};