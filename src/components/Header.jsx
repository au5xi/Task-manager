import Button from './button'
const Header = (props) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className="header">
            <h1>{props.headerText}</h1>
            <Button color={props.showAdd ? 'red' : 'green'} title={props.showAdd ? 'Close' : 'Add'} onClick={props.onAdd} />
        </header>
    )
}

export default Header
