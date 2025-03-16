import { SlPencil, SlVector } from "react-icons/sl";
export default () => {
    return (
        <div className="flex items-center">
            <SlVector className="text-4xl" style = {{transform: 'rotate(180deg)' }}/>
            <SlPencil className="text-2xl" style = {{transform: 'rotate(-45deg)' }}/>
        </div>
    )
}