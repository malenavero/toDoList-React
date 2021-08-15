import List from "./components/List"
import Input from "./components/Input"
import {ListProvider} from "./contexts/ListContext"
import './App.css';
import { useState } from "react";

import img0 from "./img/patterns/0.jpg"
import img1 from "./img/patterns/1.png"
import img2 from "./img/patterns/2.jpg"
import img3 from "./img/patterns/3.jpg"
import img4 from "./img/patterns/4.jpg"
import img5 from "./img/patterns/5.png"
import img6 from "./img/patterns/6.jpg"

function App() {

  const [arrList, setArrList] = useState([]);
  const patterns = [img0, img1, img2, img3, img4, img5, img6]
  const [pattern, setPattern] = useState(1)

function handleEnter(e){
  if (e.key === "Enter" && e.target.value !== ""){
    const item = e.target.value
    const newArr = [...arrList, item]
    setArrList(newArr)
    e.target.value = " "
  }
}

function changePattern(e){
  if(e.target.className === 'main' || e.target.className === 'main ice'){
    console.log(pattern)
    pattern < (patterns.length - 1) ? setPattern(prev => pattern + 1) : setPattern(0)
  } 
}

const listValue = {
  list: arrList,
  handleEnter: handleEnter,  
}


  return (
    <main className="main" onClick={changePattern} style={{
        backgroundImage: `url(${patterns[pattern]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }} >
      <ListProvider value={listValue}>
        <article className="container">
          <h1>La listita de lxs pibxs</h1>
          <Input />
          <List />
        </article>
      </ListProvider>
    </main>

  )
}

export default App;
