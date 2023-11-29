import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect';

function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setActive(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const [text, setText] = useState('');
    const [btnActive, setActive] = useState(true);
    const [msg, setMsg] = useState('');
    const [rating, setRating] = useState()

    const handleTextChange = (e) => {
        setText(e.target.value);
        // console.log(text.length)
        }

        useEffect(() => {
            if(text === '') {
                setActive(true)
                setMsg(null)
            }
            else if (text.trim().length <= 10) {
              setActive(true);
              setMsg("Type more than 10 characters please");
            } else {
              setActive(false);
              setMsg("");
            }
        
          }, [text]);
        
   

    const createFeedback = (e) => {
        e.preventDefault()
        if(text.trim().length > 10 && rating !== undefined) {
            const newFeedbackItem = {
                text,
                rating
            }
            
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedbackItem)
            } else {
                addFeedback(newFeedbackItem)
            }
            setText('')
            setMsg(null)
        } else if(rating === undefined) {
            setMsg('select a rating')
        }
    }

  return (
    <Card>
        <form onSubmit={createFeedback}>
            <h2>Write your form here</h2>
            < RatingSelect select={(rating) => setRating(rating)} selected={rating} />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" 
                placeholder='Write Something...'
                value={text} />
                <Button type="submit" active={btnActive}>Send</Button>
            </div>
        </form>

        {msg && <div className='message'>{msg}</div>}
    </Card>
  )
}

export default FeedbackForm