import About from "./components/About";
import Header from "./components/Header"
import Introduction from "./components/Introduction"


function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Introduction />
      <About />
    </div>
  )
}

export default App;