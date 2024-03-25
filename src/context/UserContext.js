import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

function FetchUserData() {

    const [data, setData] = useState(null);
    const { user } = useAuth0();

    // //HTTP request to save/retrieve useris from database
    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ subClaim: user.sub })
    //     }
    //     fetch('https://urcourseplannerbff.azurewebsites.net/User', requestOptions)
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
    //             this.setState({ errorMessage: error.toString() });
    //             console.error('Error retrieivng user data!', error);
    //         });
    // }, []);

    //return (data)
    return ({userid: 99})
}

const UserContextProvider = ({ children }) => {
    const { user } = useAuth0();
    //const userData = <FetchUserdata/>
    const userData = {
        userId: 1,
        userEmail: 'testuser@gmail.com',
        subClaim: 'thisissubclaim'
    };
    const fetchUserData = FetchUserData();

    return (
        <UserContext.Provider value={{ userData, user , fetchUserData}}>
            {children}
        </UserContext.Provider>
    )
}

// const withUser = (Child) => (props) => (
//     <UserContext.Consumer>
//       {(context) => <Child {...props} {...context} />}
//     </UserContext.Consumer>
// );

export { UserContext, UserContextProvider};
