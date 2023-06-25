import Post from "./Post";
import { useEffect, useState } from "react";

function MyKindness({ user }) {

    const [myPostsArray, setMyPostsArray] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/${user}`)
            .then(res => res.json())
            .then(userData => {
                extractUserData(userData)
            })
    }, [])

    function extractUserData(data) {
        setMyPostsArray(data)
    }

    console.log(myPostsArray)
    const postList = myPostsArray.map(kindness => {console.log(kindness)
    return (<Post act={kindness.act} title={kindness.title} />)})

    return (
        <div className="column is-offset-3 is-6">
            {postList}
            {/* <Post act="It was a cold winter evening when a young woman named Sarah was driving home from work. Suddenly, her car started sputtering and came to a halt on a deserted road. Feeling helpless, she frantically searched for her phone, but realized she had left it at the office. Just as despair was starting to set in, I pulled over to offer assistance. I had noticed Sarah's predicament and immediately offered to call a tow truck and stay with her until help arrived. My act of kindness not only provided practical assistance, but also comforted Sarah during a vulnerable and stressful situation." title="Helping Emily" />
            <Post act="It was a cold winter evening when a young woman named Sarah was driving home from work. Suddenly, her car started sputtering and came to a halt on a deserted road. Feeling helpless, she frantically searched for her phone, but realized she had left it at the office. Just as despair was starting to set in, I pulled over to offer assistance. I had noticed Sarah's predicament and immediately offered to call a tow truck and stay with her until help arrived. My act of kindness not only provided practical assistance, but also comforted Sarah during a vulnerable and stressful situation." title="Helping Emily" />
            <Post act="It was a cold winter evening when a young woman named Sarah was driving home from work. Suddenly, her car started sputtering and came to a halt on a deserted road. Feeling helpless, she frantically searched for her phone, but realized she had left it at the office. Just as despair was starting to set in, I pulled over to offer assistance. I had noticed Sarah's predicament and immediately offered to call a tow truck and stay with her until help arrived. My act of kindness not only provided practical assistance, but also comforted Sarah during a vulnerable and stressful situation." title="Helping Emily" />
            <Post act="It was a cold winter evening when a young woman named Sarah was driving home from work. Suddenly, her car started sputtering and came to a halt on a deserted road. Feeling helpless, she frantically searched for her phone, but realized she had left it at the office. Just as despair was starting to set in, I pulled over to offer assistance. I had noticed Sarah's predicament and immediately offered to call a tow truck and stay with her until help arrived. My act of kindness not only provided practical assistance, but also comforted Sarah during a vulnerable and stressful situation." title="Helping Emily" /> */}
        </div>
    )
}

export default MyKindness