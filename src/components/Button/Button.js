import './Button.css'

export const Button = (props) => {
    return (
        <button className="button-primary">
            {props.children}
        </button>
    );
}