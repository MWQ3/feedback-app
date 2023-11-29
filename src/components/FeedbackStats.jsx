import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    // calculate rating avg
    let avg = feedback.reduce((accum, curr) => {
        return accum + curr.rating
    }, 0) / feedback.length
    // console.log(avg)
    avg = avg.toFixed(1).replace(/[.,]0$/,'')

  return (
      <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Ratings: {isNaN(avg) ? 0 : avg}</h4>
      </div>
  )
}

export default FeedbackStats