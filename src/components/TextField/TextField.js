import "./TextField.css"

export const TextField = (props) => {
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                onChange={(ev) => props.onChange(ev.target.value) }
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
            />
        </div>
    )
}