import { useState, useEffect } from "react";
import {mockData} from "./mockdata";

export function FetchRequirementDataByUserId(props) {
    console.log(mockData);
    const [data, setData] = useState(null);
    //HTTP request to save/retrieve useris from database
    // useEffect(() => {
    //     console.log('FetchingRequirementsData: ' + props);
    //     fetch(`https://urcourseplannerbff.azurewebsites.net/User/Requirement/UserID(${props})`)
    //         .then(async response => {
    //             const isJson = response.headers.get('content-type')?.includes('application/json');
    //             const data = isJson && await response.json();
    //             // check for error response
    //             if (!response.ok) {
    //                 // get error message from body or default to response status
    //                 const error = (data && data.message) || response.status;
    //                 return Promise.reject(error);
    //             }
    //             setData({ data })
    //         })
    //         .catch(error => {
    //             console.error('Error retrieivng user data!', error);
    //         });
    // }, []);
    return (mockData);
}