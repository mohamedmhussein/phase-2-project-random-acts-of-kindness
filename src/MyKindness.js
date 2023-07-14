import Post from "./Post";
import { useEffect, useState } from "react";

function MyKindness({ currentUser, handleClick, dataChange }) {

    const backgroundStyle = {
        backgroundColor: "#ffb6f0",
        backgroundSize: "cover",
    }

    // using a state of an Array of my kindness acts (posts)
    const [myPostsArray, setMyPostsArray] = useState([])
    //Getting all my kindness acts from the server
    useEffect(() => {
        fetch("https://random-acts-of-kindness-server.onrender.com/users")
            .then(res => res.json())
            .then(data => {
                extractUserData(data)
            })
    }, [dataChange, currentUser])


    // filtering the data to only extract the acts of the current user
    function extractUserData(data) {
        setMyPostsArray(data.filter(item => item.user === currentUser))
    }
    //construct the JSX of of all posts
    const postList = myPostsArray.slice(0).reverse().map(user => <Post key={user.id} act={user.act} title={user.title} user={user.user} like={user.like} IDidIt={user.IDidIt} IWillDoIt={user.IWillDoIt} id={user.id} handleClick={handleClick} />)

    return (
        <div className="column is-offset-2 is-8" style={backgroundStyle}>
            {postList}
        </div>
    )
}

export default MyKindness