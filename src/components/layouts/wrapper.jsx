export default ({children , className}) => {
    return (
        <div className={`flex justify-center relative overflow-hidden ${className}`}>
            <div className="container">
                {children}
            </div>
        </div>
    )
}