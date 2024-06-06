import "./Form.css";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";
import TextArea from "../TextArea";
const Form = (props) => {
    const [name, setName] = useState("");
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [genre, setGenres] = useState("");

    const toTheSave = (event) => {
        event.preventDefault()
        props.registeredData({
            name, 
            resume, 
            url,
            genre
        });
        setName("");
        setResume("");
        setUrl("");
        setGenres("");
    }

    return (
        <section className={`form`}>
            <form onSubmit={toTheSave}>
            <h2>Informe os dados da filme ou série assistida!</h2>
                <TextField required={true} label={"Nome"} placeholder={"Nome da série ou filme: "} 
                    changed={value => setName(value)}
                    value={name}
                />
                <TextArea required={true} label={"Resumo"} placeholder="Digite o resumo"
                    changed={ value => setResume(value)}
                    value={resume}
                    min={10}
                    max={100}
                />
                <TextField label={"Imagem"} placeholder={"Digite o endereço da imagem"} 
                    changed={value => setUrl(value)}
                    value={url}
                />
                <DropdownList required={true} label={"Categoria"} items={props.genresItems}
                changed={value => setGenres(value)}
                value={genre}
                />
                <Button>
                    Criar Cartaz
                </Button>
            </form>
        </section>
    )
}

export default Form;