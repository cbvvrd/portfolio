import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div className="flex flex-col md:mx-28">
      <Header />
      <Introduction />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;