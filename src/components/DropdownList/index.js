import "./DropdownList.css"

const DropdownList = (props) => {
    return(
        <div className="dropdown_list">
            <label>{props.label}</label>
            <select value={props.value} onChange={value => props.changed(value.target.value) } required={props.required}>
                <option value=""></option> 
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownList;