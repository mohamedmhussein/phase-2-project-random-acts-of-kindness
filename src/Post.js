import "./Post.css"
import { useState } from "react"
function Post({ act, title, user, like, IDidIt, IWillDoIt, id }) {
    const buttonClasses = "button is-warning has-text-weight-semibold is-rounded"

    //const [likes, setLikes] = useState([like: 0, IDidIt: 0, IWillDoIt: 0])

    return (
        <div className="columns my-6 ">
            <div className="box column mx-6 content is-normal " style={{ opacity: "195%" }}>
                <button className="column delete is-offset-11  is-1 mt-4"></button>
                <h1 className="my-1 has-text-centered is-6 "> {title} </h1>
                {{ user } ? <h4 className="my-1 has-text-centered is-6 has-text-weight-light	"> By: {user} </h4> : {}}
                <p className="column mx-4 has-text-justified is-size-6" style={{ height: "15em", overflowY: "scroll" }}>
                    {act}
                </p>
                <div className="field is-grouped mx-5 columns mb-1">
                    <p className="control column has-text-centered">
                        <button className={buttonClasses}>
                            <i className="fa-solid fa-heart mr-2 has-text-danger"></i> Like {like}
                        </button>
                    </p>
                    <p className="control column has-text-centered">
                        <button className={buttonClasses}>
                            <i className="fa-solid fa-circle-check mr-2 has-text-success"></i>I did it! {IDidIt}
                        </button>
                    </p>
                    <p className="control column has-text-centered">
                        <button className={buttonClasses}>
                            💪 I will do it! {IWillDoIt}
                        </button>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Post