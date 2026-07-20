import React from "react"
import Robot from "./Components/Robot"
import Welcome from "./Components/Welcome"

const App = function () {
  return (
    <div>

      <h1>Salom React</h1>
      <Robot name="Optimus Prime" color="blue" />
      <Robot name="Bubmbey" color="yellow" />
      <Robot name="Iron Man" color="red" />


      <Welcome />
    </div>
  )
}
export default App