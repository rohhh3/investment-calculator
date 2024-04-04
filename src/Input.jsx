export default function Input(props){
    return(
        <div className="input-group">
            <label>{props.label}</label>
            <input type={props.type} />
        </div>
    )
}