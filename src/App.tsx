import Header from "./components/Header"
import Section from "./components/Sections"

const App = () => {
  return (
    <div className="bg-black text-white h-screen">
      <Header title={"Hello World"} description={"This is just a normal title"} />
      <Section title="Different Title">This is a new section</Section>
    </div>
  )
}

export default App
