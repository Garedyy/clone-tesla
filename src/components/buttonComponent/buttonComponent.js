import "./buttonComponent.css";

const ButtonComponent = ({ text, primary }) => {
    return(
        <button className={primary ? "primary" : "secundary"}>
            {text}
        </button>
    )
}


export default ButtonComponent;