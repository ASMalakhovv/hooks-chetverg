import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {withLocalStorageSaving} from "./withLocalStorageSaving";

type InputProps = {
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


let Input: React.FC<InputProps> = ({value,onChange, ...props}) => {

    return (
        <input type='text' value={value} onChange={onChange}/>
    )
}



export default withLocalStorageSaving('input')(Input)