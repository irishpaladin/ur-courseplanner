import { useState, useEffect } from "react";

export function FetchAllCourseData(props) {
    const [data, setData] = useState([]);
    //HTTP request to save/retrieve useris from database
    useEffect(() => {
        
        fetch(`https://urcourseplannerbff.azurewebsites.net/Course/CourseDetailsUser(${props})`)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                setData({ data })
            })
            .catch(error => {
                console.error('Error All Courses data!', error);
            });
    }, []);
    return (data);
}