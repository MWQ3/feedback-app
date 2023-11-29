import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'

function FeedbackItem({ item }) {
  // const [rating, setRating] = useState(item.rating)
  // const [text, setText] = useState(item.text)

    // const handleClick = () => {
    //   setRating((prev) => {
    //     return prev + 1
    //   })
      
    // }

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)  

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        < FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit' >
        <FaEdit color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

export default FeedbackItem