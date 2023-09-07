import { useState,useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import { useContext } from "react"
import FeedbackContext from "../contexts/FeedbackContext"

function FeedbackForm() {
    
    const [text, settext]= useState('')
    const [rating , setRating]= useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message,setMessage] = useState('')

    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit === true){
          setBtnDisabled(false)
          settext(feedbackEdit.item.text)
          setRating(feedbackEdit.item.rating)

        }
    },[feedbackEdit])

    const handleTextChange= (e) =>
    {
        if(text === '')
        {
          setBtnDisabled(true)
          setMessage(null)
        }
        else if(text !== '' && text.trim().length <= 10){
          setMessage('Text must be atleast 10 characters')
          setBtnDisabled(true)  
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
            settext(e.target.value);
     }

     const handlesubmit= (e) =>{
        e.preventDefault()
        if(text.trim().length > 10) {
       const newFeedback = {
                text,
                rating,
            }

        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
          addFeedback(newFeedback)
        }

        setBtnDisabled(true)
         setRating(10)
        settext('')
        }
     }
  return  (
    <Card>
      <form onSubmit={handlesubmit}>
    <h2>how would you rate your service with us</h2>
    <RatingSelect select={setRating} selected={rating} />

    <div className="input-group">
            <input 
               onChange={handleTextChange} type="text" 
               placeholder="write a review" 
               value={text}
               />

            <Button type="submit" isDisabled={btnDisabled}>
                Send
            </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
  
}

export default FeedbackForm
