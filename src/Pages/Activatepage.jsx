import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AppCtx } from "../Context/AppContext";
import { activateAccount } from "../API/help";


export default function ActivationPage(){

    //importing states from app context
    const {msg,setMsg}=useContext(AppCtx);

    //importing useParams from react router dom to get values from the params
    const params=useParams();

    //setting id from the params value
    const id=params.id;

    //importing useNavigate from react router dom to navigate between pages
    const navigate=useNavigate();
    
    //setting initial values while mouting
    useEffect(()=>{

        setMsg("");
        //passing id to the activate account function and handling responses
        activateAccount(id).then((result)=>{setMsg(result.message)
            
            //setting condition according to the response
        if(result.message==="Activation Successfull"){
            setTimeout(()=>{
               navigate("/login")
            },3000)
        }
        }).catch((error)=>setMsg("failed"))
    },[])

    return(

        <div className="subject-activate">
            <h1 className="text-center align-center justify-center  text-5xl mb-4 uppercase" style={{color: "black"}}>{msg}</h1>
            {msg==="Activation Successfull"?<h1 className="text-center align-center justify-center text-neutral text-2xl uppercase" style={{color: "black"}}>Redirecting to Login Page</h1>:""}   
        </div>
    )
}