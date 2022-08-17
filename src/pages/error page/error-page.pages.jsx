const ErrorPage = () => {
    return (
        <div className="App">

            <div className="div--error">
            <img className="error-photo"
                src={`${process.env.PUBLIC_URL}/images/error-404.png`}
                alt="error"
            />
            </div>

        </div>
    )
}

export default ErrorPage;