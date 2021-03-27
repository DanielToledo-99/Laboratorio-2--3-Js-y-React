const Total = (props) =>{
    return (
        <div>
            <p>
            <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
            </p>
        </div>
    )
}
export default Total