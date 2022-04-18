import React, {DetailedHTMLProps, SelectHTMLAttributes} from "react";


type SelectProps = {
    values: string[]
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>


let SelectWith: React.FC<SelectProps> = ({values, ...props}) => {

    const option = values.map((v, i) => <option key={i}>{v}</option>)

    return (
        <select style={{width: "400px", height: 30}} {...props}>
            {option}
        </select>

    )
}


export default SelectWith