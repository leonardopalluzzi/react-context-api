import List from "../components/List"

export default function Home() {
    return (
        <>
            <main className="py-5">
                <div className="container">
                    <h2 className="py-3">Posts</h2>
                    <List />
                </div>

            </main>
        </>
    )
}