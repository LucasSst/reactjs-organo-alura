import "./Card.css";


const Card = ({name, resume, url, backgroundColorPrimary}) => {
    return(
        <div className="card" >
            <div className="header" style={{backgroundColor: backgroundColorPrimary}}>
                <img src={url} alt={name}/>
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <div className="footer_text">
                    <h5>Resumo</h5>
                    <p>{resume}</p>
                </div>
            </div>
        </div>
    )

}

export default Card;