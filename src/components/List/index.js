import Item from "./../Item"
import {useContext} from 'react'
import ListContext from "../../contexts/ListContext"

function List (){
    const data = useContext(ListContext)
    const arrList = data.list
    return <>
        <ul className="list">
         {arrList.map((value, index) => {
            return <Item key={index} task={value} />
        })} 
        </ul>
    </>
}

export default List