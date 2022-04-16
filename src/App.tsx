import React, {Dispatch, SetStateAction, useState} from 'react';
import './App.css';

function AppContainer(props: any) {

    const [age, setAge] = useState<number>(18)
    const [weight, setWeight] = useState<number>(80)

    return (
        <div className="App">
            <App age={age} setAge={setAge} weight={weight} setWeight={setWeight}/>
        </div>
    );
}

type AppType = {
    weight: number
    setWeight: Dispatch<SetStateAction<number>>
    age: number
    setAge: Dispatch<SetStateAction<number>>
}

function App({age, setAge, weight, setWeight}: AppType) {
    return (<>
            <div className="App">
                age: {age}
            </div>
            <button onClick={() => setAge(age + 1)}>+</button>
            <div className="App">
                weight: {weight}
            </div>
            <button onClick={() => setWeight(weight + 1)}>+</button>
        <hr/>
        </>
    );
}

export default AppContainer;
