import { useState, useEffect } from "react";

export function FetchUserData(props) {
    const [userId, setUserId] = useState(-1);
    //HTTP request to save/retrieve useris from database
    useEffect(() => {
        if(props?.email!=null)
        {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ account_email: props.email, subclaim: props.sub })
            };
            fetch(`https://urcourseplannerbff.azurewebsites.net/User`, requestOptions)
                .then(async response => {
                    const isJson = response.headers.get('content-type')?.includes('application/json');
                    const data = isJson && await response.json();
                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }
                    setUserId({ data })
                })
                .catch(error => {
                    console.error('Error retrieivng user data!', error);
                });
        }
    }, []);
    return (userId);
}