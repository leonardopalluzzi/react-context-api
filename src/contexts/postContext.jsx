import { createContext, useContext, useState, useEffect } from "react";

// create context
const PostContext = createContext();
console.log(PostContext);


//define provider
function PostProvider({ children }) {
    //3 define initial state
    const [postData, setPostData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/social/')
            .then(res => res.json())
            .then(data => {
                setPostData(data)

            })
            .catch(err => console.error(err))
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