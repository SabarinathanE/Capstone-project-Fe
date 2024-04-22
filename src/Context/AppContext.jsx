import  { createContext, useState } from "react";


export const AppCtx=createContext({
    title: [],
    setTitle: () => {} ,
    isEditing: false,
    setIsEditing: () => {},
    editedValue: [],
    setEditedValue: () => {}
});

export default function AppContext({children}){
    //creating states
    const [msg,setMsg]=useState("");
    const [url,setUrl]=useState("");
    const [clip,setClip]=useState("");
    const [title, setTitle] = useState("")
    const [content, setContent] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [editedValue, setEditedValue] = useState([])
 
    const [loading,setLoading]=useState(false);

    return(
        //passing states to the appctx provider for global use
        <AppCtx.Provider
            value={{msg,setMsg,url,setUrl,clip,setClip,loading,isEditing,editedValue,setEditedValue,setIsEditing,setLoading,title,setTitle,content,setContent}}
        >
            {children}
        </AppCtx.Provider>
    )
}