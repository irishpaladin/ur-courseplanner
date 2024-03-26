import { useState, useEffect } from "react";

export function FetchScheduleData(props) {
    const [data, setData] = useState(null);
    //HTTP request to save/retrieve useris from database
    useEffect(() => {
        fetch(`https://urcourseplannerbff.azurewebsites.net/RequirementSchedule?userId=(${props.userId})`)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    setData({ data });
                }
                else{
                    setData(null);
                } 
            })
            .catch(error => {
                console.error('Error retrieving schedule data!', error);
            });
    }, []);
    return (data);
}