import { useState } from "react"
import Header from "./components/Header"
import Section from "./components/Sections"
import Counter from "./components/Counter"

const App = () => {

  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-black text-white h-screen">
      <Header title={"Hello World"} description={"This is just a normal title"} />
      <Section title="Different Title">This is a new section</Section>
      <Counter setCount={setCount}>The count is {count}</Counter>
    </div>
  )
}

export default App
