import Card from "./Card"
import { usePostContext } from "../contexts/PostContext"

export default function List() {

    const { postData } = usePostContext()
    console.log(postData);


    return (
        <>
            <div className="container">
                <div className="row gy-4">
                    {postData.map(item => (
                        <Card key={item.id} content={item.content} img={item.image} title={item.title} />
                    ))
                    }
                </div>
            </div>
        </>
    )
}