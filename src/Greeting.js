import './Greeting.css';
function Greeting(props){
    return(
        <div className="Greeting"> <h1>Hello, My Name is {props.name}, I am from {props.city}</h1></div>
    )
}export default Greeting;