import './ComponentB.css'

function ComponentB(props) {

    const textChangeHandler = (event) => {
        let NewComponentBValue = event.target.value === "" ? "Wagner" : event.target.value
        props.onRetrieveFromB(NewComponentBValue)
    };

    return (
        <div>
            <div className='ComponentBText'>Component B</div>
            <div className='ComponentBText'>{props.componentAProperty}</div>
            <input  type="text" onChange={textChangeHandler}/>
        </div>
    );
}
export default ComponentB;