import Card from "./Card"
import { usePostContext } from "../contexts/PostContext"

export default function List() {

    const { postData } = usePostContext()

    return (
        <>
            <div className="container">
                <div className="row">
                    <Card />
                </div>
            </div>
        </>
    )
}