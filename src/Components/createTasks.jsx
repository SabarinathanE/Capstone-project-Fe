import Topbar from "./Navbar";

export default function CreateTasks({children}){

      return(

      //CreateTasks component to use topbar as mandatory and to change children component according to the page
      
            <div className="mainspace" style={{background:"#b3259e"}}>
                  <div className="rounded-none card-glass">
                        <Topbar/>
                  </div>
                  <div className="subject-section">
                        {children}
                  </div>
            </div>

    
      )
}