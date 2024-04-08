import { useState, useEffect } from "react";
import {mockData} from "./mockdata";

export function FetchAllCourseData() {
    console.log(mockData);
    const [data, setData] = useState([]);
    //HTTP request to save/retrieve useris from database
    useEffect(() => {
        console.log('FetchingAllCoursesData...');
        fetch(`https://urcourseplannerbff.azurewebsites.net/Course/All`)
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