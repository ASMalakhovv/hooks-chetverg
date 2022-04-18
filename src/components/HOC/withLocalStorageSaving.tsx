import {
    ComponentType,
    DetailedHTMLProps,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
} from "react";
import {useHookForSavingLocalstorage} from "../HOOK/useHookForSavingLocalstorage";

type HTMLType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
    & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export function withLocalStorageSaving(name: string) {
    return function <T>(Component: ComponentType<T>) {
        return ({value, onChange, ...props}: T & HTMLType) => {
            let [onChangeA, currentValue] = useHookForSavingLocalstorage(value, 'textarea', onChange)
            return <Component {...props as T} value={currentValue} onChange={onChangeA}/>
        }
    }
}

