import './Card.css';

function Card(props) { // Wrapper Component
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;