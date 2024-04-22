import { Link, useNavigate } from "react-router-dom"

export default function Topbar(){

    //importing useNavigate from react router dom to navigate between pages
    const navigate=useNavigate();

    //getting name values from the local storage and storing it in name
    const name=localStorage.getItem("name");

    return(

        <div className="navbar topbar-section-1 p-0"  >
          <nav className="navbar navbar-flex navbar-expand-lg body-tertiary" >
            <div className="container-fluid "  >
              <a className="navbar-brand" href="#" onClick={()=>navigate("/")}>TASKS</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse  navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={()=>navigate("/createTasks")}>CREATE TASKS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={()=>navigate("/allTasks")}>ALL TASKS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={()=>navigate("/completedTasks")}>COMPLETED TASKS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={()=>{
                            navigate("/pendingTasks")
                            window.location.reload(false);
                            }}>PENDING TASKS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={()=>navigate("/login")}>LOGIN/REGISTER</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={()=>{
                            localStorage.removeItem("name");
                            localStorage.removeItem("token");
                            window.location.reload(false);
                            }}>LOGOUT</a>
                </li>
                {name? <li className="nav-item">
                  <a className="nav-link active text-l uppercase skeleton" style={{color: "red"}} aria-current="page" href="#" onClick={()=>navigate("/createTasks")}>{name}</a>
                </li>:""}
              </ul>
            </div>
            </div>
          </nav>
        </div>
    )
}