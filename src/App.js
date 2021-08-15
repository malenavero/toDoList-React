import List from "./components/List"
import Input from "./components/Input"
import {ListProvider} from "./contexts/ListContext"
import './App.css';
import { useState } from "react";

function App() {

  const [arrList, setArrList] = useState([])

function handleEnter(e){
  if (e.key === "Enter"){
    const item = e.target.value
    const newArr = [...arrList, item]
    setArrList(newArr)
    e.target.value = " "
  }
}



const listValue = {
  list: arrList,
  handleEnter: handleEnter,
  
}
  return (
    <ListProvider value={listValue}>
      <article className="container">
        <h1>La listita de lxs pibxs</h1>
        <Input />
        <List />
      </article>
    </ListProvider>
  )
}

export default App;
