import Post from "./Post";
import { useEffect, useState } from "react";

function MyKindness({ user }) {

    // using a state of an Array of my kindness acts
    const [myPostsArray, setMyPostsArray] = useState([])

    //Fetching my kindness acts from the json server
    useEffect(() => {
        fetch(`http://localhost:3000/users`)
            .then(res => res.json())
            .then(userData => {
                //console.log(userData)
                extractUserData(userData)
            })
    }, [user])

    // extracting the data from the fetching
    function extractUserData(data) {
        setMyPostsArray(data[0][`${user}`])
    }

    //construct the JSX of each post using mapping
    const postList = myPostsArray.map(kindness => <Post key={kindness.id} act={kindness.act} title={kindness.title} />)

    return (
        <div className="column is-offset-3 is-6">
            {postList}
        </div>
    )
}

export default MyKindness