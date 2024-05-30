import "./Teams.css"
import Card from "../Card"

const Teams = (props) => {
    const data = props.data
    const css = {backgroundColor:props.colorSecondary}
    const colorPrimary = props.colorPrimary

    return(
        props.data.length > 0 && <section className="team" style={css}>
            <h3 style={{borderColor: props.colorPrimary}}>{props.name}</h3>
            <div className="data">
                {data.map(v => <Card key={v.name} backgroundColorPrimary={colorPrimary} name={v.name} office={v.office} url={v.url} />)}
            </div>
        </section>
    )
}

export default Teams;