import './ComponentA.css'

import { useState } from "react"
import ComponentB from "./ComponentB"

function ComponentA() {
    const [componentAProperty, setComponentAProperty] = useState("Vivaldi");
    const [retrievedBProperty, setRetrievedBProperty] = useState("Wagner");

    const onRetrieveFromB = (retrievedInfo) => {
        setRetrievedBProperty(retrievedInfo)
    }

    const textChangeHandler = (event) => {
        let NewComponentAValue = event.target.value === "" ? "Vivaldi" : event.target.value
        setComponentAProperty(NewComponentAValue)
    }

    return (
        <div>
            <div className='ComponentAText'>Component A</div>
            <div className='ComponentAText'>{retrievedBProperty}</div>
            <input type="text" onChange={textChangeHandler}/>
            <div>
                <ComponentB componentAProperty={componentAProperty} onRetrieveFromB={onRetrieveFromB}/>
            </div>
        </div>
    );
}
export default ComponentA;