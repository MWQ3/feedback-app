import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'
import Loading from './shared/Loading'

function FeedbackList() {

  const {feedback, loading} = useContext(FeedbackContext)
  
  
  if(!loading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback</p>
    }


  return loading ? (< Loading />) : (
    
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
          transition={{ duration: 0.2 }}
          >
            <FeedbackItem 
            key={item.id} 
            item={item}
            />
          </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList