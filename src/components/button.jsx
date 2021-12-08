const button = (props) => {
    return (
        <>
            <button onClick={props.onClick} style={{backgroundColor: props.color}} className="btn">{props.title}</button>
        </>
    )
}

export default button
