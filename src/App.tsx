import React, {useCallback, useMemo, useState} from 'react';
import './App.css';

function AppContainer(props: any) {
    console.log('App')

    const [counter, setCounter] = useState(0)
    const [year, setYear] = useState(2022)

    let superYear:number = useMemo(()=>{
        console.log('useMemo')
        return year+2000
    },[year])

    const onPlusClick = useCallback(() => {
        setCounter((state) => state + 1)
    }, [])
    const onYearClick = useCallback(() => {
        setYear(year + 1)
    }, [year])


    return (
        <>
            <Counter counter={counter}/>
            <div>
                <Button onPlusClick={onPlusClick} value='+'/>
            </div>
            <div>
                <Footer year={superYear} onIncrement={onYearClick}/>
            </div>
        </>
    )

}

type CounterType = {
    counter: number
}

function Counter({counter}: CounterType) {
    console.log('Counter')

    return (
        <>
            {counter}
        </>
    )
}


type ButtonType = {
    onPlusClick: () => void
    value: string
}
const Button = React.memo((props: ButtonType) => {
    console.log('Button')
    return (
        <div>
            <button onClick={props.onPlusClick} style={{width: 200}}>{props.value}</button>
        </div>
    );
})

const Footer = React.memo(({year, onIncrement}: { year: number, onIncrement: () => void }) => {
    console.log('Footer')
    return (
        <div>
            FOOTER {year}
            <button onClick={onIncrement}>+</button>
        </div>
    );
})


export default AppContainer;
