import "./model.css";
import ButtonComponent from "../buttonComponent/buttonComponent";

const Model = ({ model, titleModel, price, laDescription }) =>{
    return(
        <div className="model">
            <div className="modelContent">
                <h1>{titleModel}</h1>
                <h2>À partir de {price} €</h2>
                {laDescription ? <p>{laDescription}</p> : <></>}
            </div>
            <div className="buttons">
                <ButtonComponent text="Commander" primary={true} />
                <ButtonComponent text="Essais" primary={false} />
            </div>
            <img id="backgroundModel" src={model}></img>
        </div>
    )
}


export default Model;