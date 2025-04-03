export default function Card({ content, img, title }) {
    return (
        <>
            <div className="col-4">
                <div className="card h-100 text-center">
                    <div className="card-header">
                        <img src={img} alt="" />
                    </div>
                    <div className="card-body">
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}