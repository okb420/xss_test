import { useState } from "react";
import { useParams } from "react-router-dom";

export const Message = () => {

    const { username } = useParams();
    // console.log(username);
    let text = "<h1> Hello " + username + "!</h1>"

    return (
        <div dangerouslySetInnerHTML={{__html: text}} />
    )
}