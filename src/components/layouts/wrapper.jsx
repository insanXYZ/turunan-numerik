export default ({children , className}) => {
    return (
        <div className={`flex justify-center ${className}`}>
            <div className="container relative">
                {children}
            </div>
        </div>
    )
}