import Topbar from "./Navbar";

export default function AllTasks({children}){

      return(

      //AllTasks component to use topbar as mandatory and to change children component according to the page
      
            <div className="mainspace" >
                  <div className="rounded-none card-glass">
                        <Topbar/>
                  </div>
                  <div className="subject-Tasks container pt-4">
                        {children}
                  </div>
            </div>
      )
}