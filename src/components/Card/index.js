import "./Card.css";


const Card = ({name, office, url, backgroundColorPrimary}) => {
    return(
        <div className="card" >
            <div className="header" style={{backgroundColor: backgroundColorPrimary}}>
                <img src={url} alt={name}/>
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{office}</h5>
            </div>
        </div>
    )

}

export default Card;