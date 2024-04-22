import Topbar from "./Navbar";

export default function Mainspace({children}){
      
      return(
            
      //mainspace component to use topbar as mandatory and to change children component according to the page
      
            <div className="mainspace" style={{background:"#d4f6e0"}}>
                  <div className="rounded-none card-glass">
                        <Topbar/>
                  </div>
                  <div className="subject-section">
                        {children}
                  </div>
            </div>
      )
}