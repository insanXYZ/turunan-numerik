import { SlPencil, SlVector } from "react-icons/sl";
export default ({size = "20px"}) => {
    return (
        <div className={`text-[${size}]`}>
            <SlVector style = {{transform: 'rotate(180deg)' }}/>
            <SlPencil style = {{transform: 'rotate(-45deg)' }}/>
        </div>
    )
}