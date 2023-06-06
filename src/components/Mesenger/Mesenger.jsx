import { useState } from "react"
import './message.css'

const friends = [
    'Marlen','Vlad','Misha'
]

export function Mesenger() {
    const [friend, setFriend] = useState() 
    // friend - константа
    // setFriend - это грубо говоря константа для REACT, что бы он увидел
    const [text, setText] = useState('')
    const [fullText, setFullText] = useState('')
    const [status, setStatus] = useState();

    
    const onSubmit = (e) => {
        e.preventDefault();
        setStatus('pending')

        setTimeout(() => {
            setStatus('done')
        },2000)

        // console.log('Form:', {
        //     friend,
        //     text,
        // });
    }

    if (status === 'pending') {
        return <div className="container">Setting...</div>
    }
    if (status === 'done') {
        return <div className="container">Your messege is sent </div>
    }

    return <div className="container">
        <h1>Choose which of your friends</h1>
        <form onSubmit={onSubmit}>

            <div className="flex">
                <label htmlFor="friends">
                    Please choose your friend from the list
                </label>
                <select value={friend}
                    onChange={(e) => setFriend(e.target.value)} id="friends">
            
                    {friends.map((f, index) => {
                        return <option key={index}>{f}</option>
                    })}
                </select>
            </div>
        
            <div className="flex">
                <label htmlFor="text">Your title</label>
                <input
                    id="text"
                    placeholder="Your title"
                    type="text"
                    name="next"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className="flex">
                <label htmlFor="fullText">Your full text</label>
                <textarea
                    id="fullText"
                    placeholder="Enter your full text"
                    value={fullText}
                    onChange={(e) => setFullText(e.target.value)}>
                    
                </textarea>
            </div>

            <button type="submit">Send</button>

        </form>
    </div>
}
export default Mesenger