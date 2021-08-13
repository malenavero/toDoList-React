import {useContext} from 'react'
import ListContext from "../../contexts/ListContext"
import styles from "./Input.module.css"


function Input(){
    const data = useContext(ListContext)
    const handleEnter = data.handleEnter 

    return (
        <>
        <input type="text" onKeyPress={handleEnter} className={styles.input}></input>
        </>
    )
}


export default Input