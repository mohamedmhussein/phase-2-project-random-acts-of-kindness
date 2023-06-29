import Post from "./Post"
import { useState, useEffect } from "react"
function OthersPosts({ currentUser }) {

    //Fetching the all posts for all users
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(data => {
                showOtherPosts(data)
            })
    }, [currentUser])
    //creating a state variable for posts to extract it from insie the function showOtherPosts
    const [posts, setPosts] = useState([])

    //Forming the posts for users excluding the currentUser
    function showOtherPosts(data) {
        //Forming an array of usernames
        const users = Object.keys(data[0])
        //Excluding the current user from the list of users
        const otherUsers = users.filter(user => user !== currentUser)
        //Forming posts of all users excluding the current one (nested .map)
        const theOtherPosts = otherUsers.map(user => data[0][user].map(username => <Post key={username.id} act={username.act} title={username.title} />))
        //Updating the state variabl 
        setPosts(theOtherPosts)
    }

    return (
        <div>
            {posts}
        </div>
    )
}

export default OthersPosts