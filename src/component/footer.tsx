 
import logo from "../assets/logo-text.png"
 
export default function Footer() {
  return (
    <div> 
     <section className="mt-20   container  mx-auto mb-20 shadow-sm px-13 sm:px-10 py-13 flex flex-col lg:flex-row gap-3 lg:gap-20 justify-between items-start  ">
        <div className="space-y-1.5">
<img src={logo} alt="logo" />
<p className="opacity-60">Curated tools, technologies, and resources for developers building
modern software.</p>
<div className="flex gap-5">
     <a href="https://github.com/programminghero1" className="font-bold">GitHub</a>
     <a className="font-bold" href="">Twitter</a>
     
     <a className="font-bold" href="">LinkedIn</a>
</div>
</div>
        <div>    
             <h4 className="font-semibold">PRODUCT</h4>
       <ul className="opacity-60">
     
    <li>Home</li>
    <li>Technologies</li>
    <li>Projects</li>
     </ul>
        </div>
        <div>    
             <h4 className="font-semibold">COMPANY </h4>
       <ul className="opacity-60" >
    
    <li> About</li>
    <li> Contact</li>
    <li> Careers</li>
     </ul>
        </div>
        <div>    
            <h4 className="font-semibold">  LEGAL</h4>
       <ul className="opacity-60">
    
    <li>  Privacy Policy</li>
    <li> Terms of Service </li>
     
     </ul>
        </div>
         
         
     </section>
      <div className="mx-auto flex justify-between container mb-10">
        <p className="opacity-60">© 2026 Dev Stack. All rights reserved.</p>
        <div >
<ul className="flex gap-10 opacity-60">
    <li>Terms</li>
<li>Privacy</li>
</ul>
        </div>
      </div>


      </div>

      
  )
}
