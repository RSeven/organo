import "./DropdownField.css"

export const DropdownField = (props) => {
    return (
        <div className="dropdown-field">
            <label>{props.label}</label>
            <select onChange={(ev) => props.onChange(ev.target.value)}>
                {props.options.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}