import { useState, useEffect } from "react";

export function FetchRequirementDataByUserId(props) {
    const [data, setData] = useState(null);
    const [userId, setUserId] = useState(-1);
    //HTTP request to save/retrieve useris from database
    console.log('FetchRequirementDataByUserId - UserId: ' + props.userId);
    useEffect(() => {
        console.log('inside effect');
        setUserId(props.UserId);
        fetch(`https://urcourseplannerbff.azurewebsites.net/User/Requirement/UserID(${props.userId})`)
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
                this.setState({ errorMessage: error.toString() });
                console.error('Error retrieivng user data!', error);
            });
    }, []);
    if (data == null) console.log('FetchRequirementDataByUserId is null')
    return (data);
}

// function FetchUserData(props) {
//     const [data, setData] = useState(null);
//     //HTTP request to save/retrieve useris from database
//     useEffect(() => {
//         fetch(`https://urcourseplannerbff.azurewebsites.net/Course/UserID(${props.userId})`)
//             .then(async response => {
//                 const isJson = response.headers.get('content-type')?.includes('application/json');
//                 const data = isJson && await response.json();

//                 // check for error response
//                 if (!response.ok) {
//                     // get error message from body or default to response status
//                     const error = (data && data.message) || response.status;
//                     return Promise.reject(error);
//                 }
//                 setData({ data })
//             })
//             .catch(error => {
//                 this.setState({ errorMessage: error.toString() });
//                 console.error('Error retrieivng user data!', error);
//             });
//     }, []);

//     return (data)
// }