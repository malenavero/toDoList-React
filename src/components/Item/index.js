import {useState} from 'react'
import "./style.css"

function Item ({task}){
    const [done, setDone] = useState(false)


    function handleClick(){  
        setDone(prevState => !done);
    }
    function handleDelete(e){
        e.target.parentElement.remove()
    }

    return <>
        <li className="item">
            <p className={done ? 'done' : 'toDo'} onClick={handleClick}>{task}</p>
            <p onClick={handleDelete} className="delete">delete</p>            
        </li>
    </>
}

export default Item