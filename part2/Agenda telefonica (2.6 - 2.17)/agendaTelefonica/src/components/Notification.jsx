const SuccessNotification = ({message}) => {
    if (message === null) {
        return null
    }

    return (
        <div className="succesfull">
        {message}
        </div>
    )
}

const ErrorNotification = ({message}) => {
    if (message === null) {
        return null
    }

    return (
        <div className="error">
        {message}
        </div>
    )
}

export default {ErrorNotification, SuccessNotification}