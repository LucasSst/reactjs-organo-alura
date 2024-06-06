import Button from "../Button"
import "./Section.css"
import { AiOutlinePlus } from "react-icons/ai";

const Section = (props) => {
    return (
        <div className="section">
            <h2>Minha Organização</h2>
            <Button click={props.closeAndOpenForm}><AiOutlinePlus width={62} height={62} /></Button>
        </div>

    )
}


export default Section