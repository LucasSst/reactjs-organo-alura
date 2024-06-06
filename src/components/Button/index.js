import "./Button.css"

const Button = (props) => {
    return(
        <button onClick={props.click} className="button">
            {props.children}
        </button>
    )
}

export default Button;