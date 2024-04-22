import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AppCtx } from "../Context/AppContext";
import Mainspace from "../Components/Content";
import { createTasks,  updateTasks  } from '../API/help';

export default function CreateTasksPage(){

    //importing useNavigate from the react router dom to navigate between pages
    const navigate=useNavigate();

    //importing states from the app context
   
    const {title, setTitle, content, setContent,isEditing, setIsEditing , editedValue}=useContext(AppCtx);
    const [error, setError] = useState(false)

    // function for validation
    function Sam() {
        if (!title) setError(true)
            return (
                <div className="error" style={{ color: "red",float:"left", width:"100%"}} id="nameError">Please Enter Your Title *</div>
            )
    }

    // function for handling blur
    function handleBlur() {
        if (title == "" ) {
            setError(true)
        }
    }

    // function for creating the tasks
    function CreateTasks() {

        const details = {
                title,
                content,
                isCompleted: false
        }
        createTasks(details)        
    }

    // function for editing the tasks
    function EditTasks() {

        const details = {
                title,
                content,
                isCompleted: false
        }
        updateTasks(details, editedValue._id)
        setIsEditing(false)
    }
        
    function PlaceDate() {

        if(isEditing) {
            if(title) {
                EditTasks()
            }
        } else if (!isEditing){

            if (title) {
                CreateTasks()
            } else alert("Give Title For Your Task Buddy")     
        }   
    }
  
   //setting initial values while mounting
    useEffect(()=>{

        //setting condition as if there is no token data from the local storage
        if(!localStorage.getItem("token")){

            //alert component from Swal
            Swal.fire({
                icon: "error",
                title: "Login to create Tasks",
                text: "By clicking Ok, you will be redirected to login page",
            });
            navigate("/login");
        }
    },[])


    return(

        <Mainspace>
            <div className="card-items mt-2">
                <div className="card   shadow-2xl list:p-6" >
                    <form>
                        <div className="card-body">
                            <label  className="form-label">Enter Your Title</label>
                            <input  type="text" value={title} onBlur={handleBlur} className="form-control" onChange={(event) => {
                                setTitle(event.target.value)
                                {event.target.value == "" ? setError(true): setError(false)}}
                                }  id="exampleFormControlInput1" placeholder="Enter the title" />
                                {title == "" && error ? <Sam /> : ""}
                            <label  className="form-label">Textarea</label>
                            <textarea type="text" value={content}  className="form-control" onBlur={handleBlur} onChange={(event) => setContent(event.target.value)}   id="exampleFormControlTextarea1" placeholder="(Optional)" rows="3"></textarea>
                    
                            <button onClick={PlaceDate} className="btn btn-primary" type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
                        </div>
                    </form>
                </div>
            </div>           
        </Mainspace>
    )
}