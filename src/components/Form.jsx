import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    let navigate = useNavigate();
    const [username, setName] = useState('');

    const nameChange = (ev) => {
        setName(ev.target.value)
    }

    const displayMessage = () => {
        navigate(`/message/${username}`)
    }

    return (
        <form onSubmit={displayMessage}>
            <label>
                Name:
                <input type="text" onChange={nameChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}