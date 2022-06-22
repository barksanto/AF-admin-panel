import { useEffect } from "react"
import "./new.scss"

function New() {
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  
  return (
    <div>New component</div>
  )
}

export default New