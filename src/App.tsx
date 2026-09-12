 
import Navbar from "./component/navbar"
import Hero from "./component/hero"
import TechnologyList ,{ technologyListPromise} from "./component/TechnologyList"
import { Suspense } from "react"
import {Toaster} from "react-hot-toast"

function App() {
   

  return (
    <>
         <Navbar />

 <Hero />
      <Suspense fallback={<p>Data Loading........</p>}>
             <TechnologyList technologyListPromise={ technologyListPromise()} />
      </Suspense>
       <Toaster
        position="top-right" 
        toastOptions={{duration:2000,
            style:{
borderRadius:"12px",
padding:"14px 18px",
background: "linear-gradient(to right ,cyan ,pink,pink)"
// fontSize:"15px"
            }
        }}
        
        />

      
    </>
  )
}

export default App
