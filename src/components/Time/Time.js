import Colaborador from "../Colaborador"
import "./Time.css"

export const Time = (props) => {
    return ((props.colaboradores.length > 0) &&
        <section class="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador =>
                    <Colaborador imagem={colaborador.imagem} cargo={colaborador.cargo} nome={colaborador.nome}
                />)}
            </div>
        </section>
    )
}