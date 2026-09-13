 
import Navbar from "./component/navbar"
import Hero from "./component/hero"
import TechnologyList ,{ technologyListPromise} from "./component/TechnologyList"
import { Suspense } from "react"
 import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/footer"

function App() {
   

  return (
    <>
         <Navbar />

 <Hero />
      <Suspense fallback={<p>Data Loading........</p>}>
             <TechnologyList technologyListPromise={ technologyListPromise()} />
      </Suspense>
      <Footer />
         <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    
        
         

      
    </>
  )
}

export default App
