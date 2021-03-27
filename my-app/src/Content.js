import Parts from './Parts.js'
import App from './index.js'
const Content = (props) =>{
    return (
        <div>
            <Parts part1={props.parts[0].name } exercises1={props.parts[0].exercises}/>
            <Parts part1={props.parts[1].name } exercises1={props.parts[1].exercises}/>
            <Parts part1={props.parts[2].name } exercises1={props.parts[2].exercises}/>
        </div>
    )
}
export default Content