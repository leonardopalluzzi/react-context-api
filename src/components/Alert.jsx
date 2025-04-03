import { useAlertContext } from '../contexts/AlertContext'

export default function Alert() {

    const { alert } = useAlertContext()

    console.log(alert);

    if (alert.message == '') {
        return (
            null
        )
    }

    return (
        <>
            <div className="container text-center">
                <div className={`card w-50 m-auto my-5 ${alert.type}`}>
                    <p>{alert.message}</p>
                </div>
            </div>

        </>
    )
}