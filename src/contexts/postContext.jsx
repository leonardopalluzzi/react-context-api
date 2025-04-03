import { createContext, useContext, useState } from "react";

// create context
const PostContext = createContext();
console.log(PostContext);


//define provider
function PostProvider({ children }) {
    //3 define initial state
    const [postData, setPostData] = useState({
        title: 'cicciogamaer',
        content: 'paitelo'
    })

    return (
        <PostProvider.Provider value={{ postData, setPostData }} >
            {children}
        </PostProvider.Provider>
    )
}

//custom hook to use data into components
function usePostContext() {

    const context = useContext(PostContext)
    console.log(context);
    return context
}

// hook and provider export
export { PostProvider, usePostContext }