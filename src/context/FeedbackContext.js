import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [loading, isLoading] = useState(true)

    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])
    
    const fetchFeedback = async () => {
        const res = await fetch('http://localhost:5000/feedback?_sort=id&_order=asc')
        
        const data = await res.json()

        setFeedback(data)
        isLoading(false)
    }

    // const postFeedback = async () => {
        
    // }

    const addFeedback = async (newFeedbackItem) => {
        const res = await fetch('/feedback',{ 
            method: 'POST',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(newFeedbackItem)
        })
        
        const data = await res.json()

        setFeedback([data, ...feedback])
    }

    const deleteFeedback = async (id) => {
        // console.log('App:', id)
        if(window.confirm('this item will be deleted, are you sure?')) {
            await fetch(`/feedback/${id}`,{ 
                method: 'DELETE'
            })
    
        setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, updItem) => {
        const res = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await res.json()
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        loading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext