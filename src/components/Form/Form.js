import { useState } from "react";
import Button from "../Button";
import DropdownField from "../DropdownField";
import TextField from "../TextField";
import "./Form.css";

export const Form = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState(props.times[0])

    const onSave = (e) => {
        e.preventDefault();
        console.log('form submitted!', nome, cargo, imagem, time);
        props.onCollaboratorRegistered({ nome, cargo, imagem, time })
    }

    return (
        <section className="form-section">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <TextField 
                    required={true}
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    value={nome}
                    onChange={(newValue) => setNome(newValue)}
                />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    value={cargo}
                    onChange={(newValue) => setCargo(newValue)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    onChange={(newValue) => setImagem(newValue)}
                />
                <DropdownField 
                    label="Time" 
                    options={props.times}
                    value={time}
                    onChange={(newValue) => setTime(newValue)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}