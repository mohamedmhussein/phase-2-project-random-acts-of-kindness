import Post from "./Post";
import { useEffect, useState } from "react";

function MyKindness({ currentUser, handleClick, dataChange }) {

    // using a state of an Array of my kindness acts
    const [myPostsArray, setMyPostsArray] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(data => {
                extractUserData(data)
            })
    }, [dataChange, currentUser])
    // extracting the data from the fetching


    function extractUserData(data) {
        setMyPostsArray(data.filter(item => item.user === currentUser))
    }
    //construct the JSX of of all posts
    const postList = myPostsArray.map(user => <Post key={user.id} act={user.act} title={user.title} user={user.user} like={user.like} IDidIt={user.IDidIt} IWillDoIt={user.IWillDoIt} id={user.id} handleClick={handleClick} />)

    return (
        <div className="column is-offset-2 is-8">
            {postList}
        </div>
    )
}

export default MyKindness