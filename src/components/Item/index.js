import {useContext} from 'react'
import ListContext from "../../contexts/ListContext"
import "./style.css"

function Item ({task}){
    const data = useContext(ListContext);
    const handleClick = data.onClick;
    const handleDelete = data.handleDelete;
    return <>
        <li className="item">
            <p onClick={handleClick} className="toDo" >{task}</p>
            <p onClick={handleDelete} className="delete">delete</p>            
        </li>
    </>
}

export default Item