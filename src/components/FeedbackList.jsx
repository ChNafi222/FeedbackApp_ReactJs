import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
// import PropTypes from 'prop-types'
import Feedbackitem from './Feedbackitem'
import FeedbackContext from '../contexts/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {

 const {feedback, isloading} = useContext(FeedbackContext)
 if(!isloading && (!feedback || feedback.length === 0)){
   return <p>No feedback Yet</p> 
 }

 return  isloading ? (
    <Spinner/> ) : (
  <div className='feedback-list'>
   <AnimatePresence>
  {
      feedback.map((item) => (
          <motion.div 
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >

          <Feedbackitem key={item.id} 
          item= {item}
            />

          </motion.div>
      ))}
      </AnimatePresence>
      </div>
      )
}

export default FeedbackList
