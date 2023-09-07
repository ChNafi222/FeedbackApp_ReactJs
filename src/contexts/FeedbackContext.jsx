import { createContext, useState, useEffect } from "react";
import { JsonFunction } from "react-router-dom";
// import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [isloading, setisloading] = useState(true)
    const [feedback,setfeedback] = useState([])
    const [feedbackEdit,setfeedbackEdit] = useState({
        item:{},
        edit: false
        
    })

    useEffect(()=>{
       fetchfeedback()
    },[])

    // fetch feedback
    const fetchfeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setfeedback(data)
        setisloading(false)

    }

    /// add feedback
    const addFeedback = async(newFeedback) => {
        const response = await fetch('http://localhost:5000/feedback', {
            method:'POST',
            headers: {
             'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })
        
        const data = await response.json()

        setfeedback([data ,...feedback])
     }

     /// delete feedback
    const deleteFeedback =async (id) => {
        if(window.confirm('are you sure you want to delete')){
            await fetch(`http://localhost:5000/feedback/${id}`, {
            method: 'DELETE' })
        setfeedback(feedback.filter((item) => item.id !==id))
        }
    }

     // update feedback item

     const updateFeedback = async(id,upditem) =>{
        const response = await fetch(`http://localhost:5000/feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(upditem)
        })
        const data = await response.json()
        setfeedback(
       feedback.map((item) => (item.id === id ? {...item,...data} : item))
        )
   }

    // set item to be updated
    const editFeedback=(item) =>{
            setfeedbackEdit({
                item,
                edit : true
            })
    }

   
 
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isloading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext