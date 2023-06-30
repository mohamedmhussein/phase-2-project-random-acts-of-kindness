import Post from "./Post";
import { useEffect, useState } from "react";

function MyKindness({ currentUser, handleClick }) {

    // using a state of an Array of my kindness acts
    const [myPostsArray, setMyPostsArray] = useState([])
    //Fetching my kindness acts from the json server
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(userData => {
                extractUserData(userData)
            })
    }, [currentUser])

    // extracting the data from the fetching
    function extractUserData(data) {
        setMyPostsArray(data.filter(item => item.user === currentUser))

        // data[0][`${currentUser}`] ? setMyPostsArray(data[0][`${currentUser}`]) : setMyPostsArray([])
    }
    //construct the JSX of each post using mapping
    const postList = myPostsArray.map(user => <Post key={user.id} act={user.act} title={user.title} user={user.user} like={user.like} IDidIt={user.IDidIt} IWillDoIt={user.IWillDoIt} id={user.id} handleClick={handleClick}/>)

    return (
        <div className="column is-offset-2 is-8">
            {postList}
        </div>
    )
}

export default MyKindness