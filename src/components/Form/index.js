import "./Form.css";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";
const Form = (props) => {
    const [name, setName] = useState("");
    const [office, setOffice] = useState("");
    const [url, setUrl] = useState("");
    const [teams, setTeams] = useState("");
    const toTheSave = (event) => {
        event.preventDefault()
        props.registeredData({
            name, 
            office, 
            url,
            teams
        });

        setName("");
        setOffice("");
        setUrl("");
        setTeams("");
    }


    return (
        <section className="form">
            <form onSubmit={toTheSave}>
            <h2>Preencha os dados para criar o card do colaborador!</h2>
                <TextField required={true} label={"Nome"} placeholder={"Digite o seu nome"} 
                    changed={value => setName(value)}
                    value={name}
                />
                <TextField required={true} label={"Cargo"} placeholder={"Digite o seu cargo"} 
                    changed={value => setOffice(value)}
                    value={office}
                />
                <TextField label={"Imagem"} placeholder={"Digite o endereço da imagem"} 
                    changed={value => setUrl(value)}
                    value={url}
                />
                <DropdownList required={true} label={"Time"} items={props.teams}
                changed={value => setTeams(value)}
                    value={teams}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;