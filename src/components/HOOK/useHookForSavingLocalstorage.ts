import {ChangeEvent, useEffect, useState} from "react";

export function useHookForSavingLocalstorage(value:any, key: any,onChange:any = ()=>{}) {
    type EventInputType = ChangeEvent<HTMLInputElement>
    type EventSelectType = ChangeEvent<HTMLSelectElement>
    type EventTextAreaType = ChangeEvent<HTMLTextAreaElement>

    const [currentValue, setCurrentValue] = useState<any>(value)

    useEffect(() => {
        if (key) {
            let valueFromLocalStorage = localStorage.getItem(key)
            valueFromLocalStorage && setCurrentValue(valueFromLocalStorage)
        }
    }, [])

    const onChangeHandler = (e: EventInputType | EventSelectType | EventTextAreaType) => {
        onChange(e.currentTarget.value)
        setCurrentValue(e.currentTarget.value)
        key && localStorage.setItem(key, e.currentTarget.value)
    }

    return [onChangeHandler, currentValue]
}