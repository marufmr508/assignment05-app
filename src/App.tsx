 
import Navbar from "./component/navbar"
import Hero from "./component/hero"
import TechnologyList ,{ technologyListPromise} from "./component/TechnologyList"
import { Suspense } from "react"

function App() {
   

  return (
    <>
         <Navbar />

 <Hero />
      <Suspense fallback={<p>Data Loading........</p>}>
             <TechnologyList technologyListPromise={ technologyListPromise()} />
      </Suspense>
      

      
    </>
  )
}

export default App
