import { SlPencil, SlVector } from "react-icons/sl"
import Wrapper from "../layouts/wrapper"

export default () => {
    return (
        <Wrapper className={"pt-20 bg-white"}>
            <div className="w-full flex justify-center items-center h-[670px]">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex text-9xl items-end font-extrabold">T<SlVector className="text-8xl text-red-600" style = {{transform: 'rotate(180deg)' }}/>urunan</div>
                    <div className="flex text-7xl items-center font-light">Numer<SlPencil className="text-5xl text-red-600 mx-[-10px]" style = {{transform: 'rotate(-45deg)' }}/>k</div>
                </div>
            </div>
        </Wrapper>
    )   
}