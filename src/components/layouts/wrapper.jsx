export default ({children,classNameParent , classNameChild}) => {
    return (
        <div className={`w-full flex flex-col items-center ${classNameParent}`}>
            <div className={`container h-full flex flex-col ${classNameChild}`}>
                {children}
            </div>
        </div>
    )
}