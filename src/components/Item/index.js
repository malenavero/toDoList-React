import {useContext, useState} from 'react'
import ListContext from "../../contexts/ListContext"
import "./style.css"

function Item ({task}){
    const data = useContext(ListContext);
    const [done, setDone] = useState(false)
   /*  const handleClick = data.onClick; */
    const handleDelete = data.handleDelete;

    function handleClick(e){  
        console.log(done) 
        setDone(prevState => !done);
        console.log(done)
        done ? e.target.className = "done" : e.target.className = "toDo"
      }

    return <>
        <li className="item">
            <p onClick={handleClick} className="toDo" >{task}</p>
            <p onClick={handleDelete} className="delete">delete</p>            
        </li>
    </>
}

export default Item