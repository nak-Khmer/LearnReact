import Greeting from "./components/Greeting";


const name = "React"
const title = "Java Script"
interface Props{
    grade:number
    name:String
    position:String
}
const obj:Props = {
    grade:10,
    name:"React",
    position:"Frontend"
}
function App() {
    return (
        <div>
            <Greeting />
            <ul> Object Props :
                <li>{obj.name}</li>
                <li>{obj.grade}</li>
                <li>{obj.position}</li>
            </ul>
        </div>
    );
}

export default App