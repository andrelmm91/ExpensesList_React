import './Card.css';

// sub-component Wrapper Card
function Card(props) {
    // combining both classes from ExpensesItems and Card components and then insert them into the div
    const classes = 'card ' + props.className;
    // the content of the .chidren of a props will be those in between the openinig and closing of the custom component
    return <div className={classes}>{props.children}</div>
};

export default Card;
