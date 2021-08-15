import {useState} from 'react'
import "./style.css"

function Item ({task}){
    const [done, setDone] = useState(true)


    function handleClick(e){  
        setDone((prevState) => !done);
        done ? e.target.className = "done" : e.target.className = "toDo"
      }
    function handleDelete(e){
        e.target.parentElement.remove()
    }

    return <>
        <li className="item">
            <p onClick={handleClick} className="toDo" >{task}</p>
            <p onClick={handleDelete} className="delete">delete</p>            
        </li>
    </>
}

export default Item