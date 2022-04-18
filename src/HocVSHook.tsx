import React from 'react';
import SelectWith from './components/HOC/SelectWith';
import TextArea from './components/HOOK/TextAreaWithHook';
import Input from "./components/HOC/Input";

const HocVsHook = () => {

    const values: string[] = ['Moscow', 'Omsk', 'Russia']

    return (
        <div>
            <SelectWith values={values} value='Russia'/>
            <TextArea limit={20} value='yo'  onChange={(value)=>alert(value)}/>
            <Input value='input text' />
        </div>
    );
};





export default HocVsHook;