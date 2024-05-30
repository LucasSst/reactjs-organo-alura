import "./TextArea.css"

const TextArea = ({max, min , label, placeholder, changed, value}) => {

    const whenTyping = (typing) => {
        changed(typing.target.value)
     }
    return (
        <div className="text_area">
            <label>{label}</label>
            <textarea value={value} onChange={whenTyping} placeholder={placeholder} minLength={min} maxLength={max}>
            </textarea>
        </div>
    )
} 


export default TextArea;