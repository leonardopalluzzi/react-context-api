import { createContext, useContext, useState, useEffect } from "react";
import { useAlertContext } from "./AlertContext";

// create context
const PostContext = createContext();
console.log(PostContext);


//define provider
function PostProvider({ children }) {
    //3 define initial state
    const [postData, setPostData] = useState([])

    const { alert, setAlert } = useAlertContext()

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/social/')
            .then(res => res.json())
            .then(data => {
                setPostData(data)
            })
            .catch(err => {
                console.error(err)

                setAlert({
                    type: 'bg-danger',
                    message: 'Network error, you can download the server from the following link: https://github.com/leonardopalluzzi/backend-react-router'
                })
            })
    }, [])

    console.log(postData);

    return (
        <PostContext.Provider value={{ postData, setPostData }}>
            {children}
        </PostContext.Provider>
    );
}

//custom hook to use data into components
function usePostContext() {

    const context = useContext(PostContext)
    console.log(context);
    return context;
}

// hook and provider export
export { PostProvider, usePostContext }