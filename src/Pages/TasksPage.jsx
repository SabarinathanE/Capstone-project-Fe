import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState} from "react";
import { AppCtx } from "../Context/AppContext";
import AllTasks from "../Components/allTasks";
import { deleteTasks, getAllTasks, updateStatus } from "../API/help";
import Swal from "sweetalert2";

export default function TasksPage(){

    //importing useNavigate from react router dom to navigate between pages
    const navigate=useNavigate();

    //importing states from app context
    const {setTitle,setContent, setIsEditing, setEditedValue}=useContext(AppCtx);
    const [datas, setDatas] = useState([])

    useEffect(()=>{
      //to get all urls for listing
      getAllTasks().then((result)=>{
        setDatas(...datas,result.message)}).catch((error)=>console.log("Error getting all urls"));
      //to get total number of urls created

    },[])

    function EditTasks(d) {

      setTitle(d.title)
      setIsEditing(true)
      setContent(d.content)
      setEditedValue(d)
      navigate("/createTasks")

    }

    async function DeleteTasks(d) {

      deleteTasks(d._id)
      const wait = await setDatas(datas.filter((details) => details._id != d._id ));
      const waiting = await getAllTasks().then((result) => {console.log(result.message)})

    }


    useEffect(()=>{
    //setting condition as if there is no token data from the local storage

      if(!localStorage.getItem("token")){
        //alert component from Swal

        Swal.fire({
            icon: "error",
            title: "Login to See Your Tasks",
            text: "By clicking Ok, you will be redirected to login page",
        });
          navigate("/login");
      }
    },[])

    async function statusUpdate(e, d) {

      if (e.target.value == "Not-Completed") {
        const details = {
            title: d.title,
            content: d.content,
            isCompleted: false
        }
        const res = await updateStatus(details, d._id)
        getAllTasks().then((result)=>{
        setDatas(result.message)}).catch((error)=>console.log("Error getting all urls"));

      } else if (e.target.value == "Completed"){
        const details = {
            title: d.title,
            content: d.content,
            isCompleted: true
        }
        const res = await updateStatus(details, d._id)
        getAllTasks().then((result)=>{
        setDatas(result.message)}).catch((error)=>console.log("Error getting all urls"));
      }
    }

    return(
      
        <AllTasks>
            {datas.length > 0 ? datas.map((d, index) => {

                return (

                  <div key={index} className="card mb-3">
                    <div className="card-header">
                      Task Management Application
                    </div>
                    <div className="card-body">
                    <div className="row">
                        <div className="col-9">
                          <h5 className="card-title">{d.title}</h5>
                        </div>
                        <div className="col-3">
                          <select id="dropdown" className="Dropdown"  onChange={(event) => statusUpdate(event, d)} >
                            <option selected disabled hidden>{d.isCompleted ? "Completed" : "Not-Completed"}</option>
                            <option style={{background: "white"}} value="Not-Completed">Not-Completed</option>
                            <option value="Completed">Completed</option>
                          </select>    
                        </div>
                    </div>

                    <h6 className="card-text">{d.content}</h6>
                      <div className="row">
                        <div className="col-3">
                          <button type="button" onClick={() => EditTasks(d)} className="btn btn-Edit btn-primary button-size btn-sm">Edit Task</button>
                        </div>
                        <div className="col-4">
                          <button type="button" onClick={() => DeleteTasks(d)} className="btn btn-Edit button-size2 btn-secondary btn-sm">Delete Task</button>
                        </div>
                      </div>
                    </div>
                  </div>

                )

                }) : <div className="subject-alt">
                      <div className="card" style={{background: "#389d8e"}}>
                        <div className="card-body" style={{color: "white"}}>
                          <span style={{fontSize:'100px', textAlign: "center"}}>&#128521;</span>
                          <h1 style={{fontSize: "large", textAlign: "center"}}>OOPS !</h1>
                          <h1 style={{fontSize: "large", textAlign: "center"}}>GO AND CRETAE YOUR FIRST TASK HOMIE</h1>
                        </div>
                      </div>
                    </div>
            }
        </AllTasks>
    );
}