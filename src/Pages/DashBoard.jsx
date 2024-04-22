import { useNavigate } from "react-router-dom";
import Mainspace from "../Components/Content";


export default function DashboardPage(){

    //importing useNavigate from react router dom to navigate between pages
    const navigate=useNavigate();
    
    return(
        <Mainspace>
            <div className="hero">
            <div className="hero bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-4 text-neutral font-bold dashboard">TASK MANAGEMENT APPLICATION</h1>
                <h1 className="mb-3 text-secondary dashboard-child">To Start Your Journey Click below</h1>
                
                <p><span style={{fontSize:'100px'}}>&#9196;</span></p>
                <button className="btn card-glass w-60 mt-3 skeleton" onClick={()=>navigate("/createTasks")}>CREATE TASKS</button>
                </div>
            </div>
            </div>
        </Mainspace>
    )
}