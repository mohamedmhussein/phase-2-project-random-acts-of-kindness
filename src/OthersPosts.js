import Post from "./Post"
import { useState, useEffect } from "react"
function OthersPosts({ currentUser, handleClick, dataChange }) {
    // This component has the posts by all other users excluding the current one

    //Fetching the all posts for all users
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(data => {
                showOtherPosts(data)
            })
    }, [dataChange, currentUser])

    //creating a state variable for posts to extract it from insie the function showOtherPosts
    const [posts, setPosts] = useState([])

    //Forming the posts for users excluding the currentUser
    function showOtherPosts(data) {
        //Filtering for posts of users excluding the currentUser
        const otherUsers = data.filter(item => item.user !== currentUser)
        //Forming posts of all users excluding the current one ( .map)
        const theOtherPosts = otherUsers.slice(0).reverse().map(user => <Post key={user.id} act={user.act} title={user.title} user={user.user} like={user.like} IDidIt={user.IDidIt} IWillDoIt={user.IWillDoIt} id={user.id} handleClick={handleClick} />)
        //Updating the state variabl 
        setPosts(theOtherPosts)
    }

    return (
        <div className="column is-offset-2 is-8">
            <h1 className="is-size-2 has-text-weight-bold has-text-centered mt-4">Welcome to Random Acts of Kindness</h1>
            <h1 className="subtitle has-text-centered my-1">This is a place where we share our kindness to the world to inspire as many people as we can to spead kindness to others. Get inspired by the below acts of kindness and share yours.</h1>
            {posts}
        </div>
    )
}

export default OthersPosts