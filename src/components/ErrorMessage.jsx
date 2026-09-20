function ErrorMessage({ title, message, error, children }) {
    return (
        <div className="text-center mt-5">
            <h2>{title}</h2>
            <p className="text-muted">{message}</p>
            <p className="small text-danger">{error}</p>
            {children}
        </div>
    )
}
export default ErrorMessage
