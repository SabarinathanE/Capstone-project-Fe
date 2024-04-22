import { API } from "./api";

//function to login user
export async function loginUser(details){
    try{
        const res=await fetch(`${API}/login`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error login user",error);
    }
}

//function to register user
export async function registerUser(details){
    try{
        const res=await fetch(`${API}/register`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error login user",error);
    }
}

//function to forgot password and mail
export async function forgotPassword(details){
    try{
        const res=await fetch(`${API}/forgot`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error forgot password",error);
    }
}

//function to reset password
export async function resetPassword(details,id){
    try{
        const res=await fetch(`${API}/reset/${id}`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error reset password",error);
    }
}

//function to get all Taks
export async function getAllTasks(){

    try{
        const res=await fetch(`${API}/getAllTasks`,{
            method:"GET",  
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error getting all urls",error);
    }
}

//function to get Completed tasks
export async function getCompletedTasks(){

    try{
        const res=await fetch(`${API}/getCompletedtask`,{
            method:"GET",  
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error getting all urls",error);
    }
}

//function to get Not Completed tasks
export async function getNotCompletedTasks(){

    try{
        const res=await fetch(`${API}/getNotCompletedTask`,{
            method:"GET",  
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error getting all urls",error);
    }
}

//function to create Tasks
export async function createTasks(details){
    try{
        const res=await fetch(`${API}/createTasks`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error adding long urls",error);
    }
}

//function to update Task
export async function updateTasks(details, id){
    try{
        const res=await fetch(`${API}/updateTasks/${id}`,{
            method:"PUT",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error adding long urls",error);
    }
}

//function to Update Status
export async function updateStatus(details, id){
    try{
        const res=await fetch(`${API}/updateStatus/${id}`,{
            method:"PUT",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error adding long urls",error);
    }
}

//function to Delete tasks
export async function deleteTasks(id){
    try{
        const res=await fetch(`${API}/deleteTasks/${id}`,{
            method:"DELETE",  
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error adding long urls",error);
    }
}

//function to activate account
export async function activateAccount(id){
    try{
        const res=await fetch(`${API}/activation/${id}`,{
            method:"GET",  
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error activating account",error);
    }
}
