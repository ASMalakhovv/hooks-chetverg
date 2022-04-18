import React, {DetailedHTMLProps, TextareaHTMLAttributes} from "react";
import {withLocalStorageSaving} from "./withLocalStorageSaving";

type TextAreaType = {
    limit: number
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>


let TextArea: React.FC<TextAreaType> = ({limit,value, ...props}) => {

    const stylesDiv: {} = {position: 'relative', width: 300, height: 100}
    const stylesTextArea: {} = {position: 'absolute', width: 300, height: 100}
    const stylesSpan: {} = {position: 'absolute', right: '3px', bottom: '3px'}

    return (
        <div style={stylesDiv}>
            <textarea {...props} style={stylesTextArea} maxLength={limit} value={value} />
            <span style={stylesSpan}>{limit - String(value).length}</span>
        </div>
    );
};


export default withLocalStorageSaving('textarea')(TextArea)
