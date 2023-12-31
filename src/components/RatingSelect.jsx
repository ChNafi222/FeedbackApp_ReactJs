import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../contexts/FeedbackContext"
function RatingSelect({select}) {
    const [selected,setselected] = useState(1)
    const {feedbackEdit} = useContext(FeedbackContext)
   useEffect(()=> {
    setselected(feedbackEdit.item.rating)
    },[feedbackEdit])
    const handleChange= (e) =>{
        setselected(+e.target.value)
        select(+e.target.value)
    }
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
   
}

export default RatingSelect
