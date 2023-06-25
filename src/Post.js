import "./Post.css"
function Post({ act, title }) {
    const buttonClasses = "button is-warning has-text-weight-semibold is-rounded"
    return (
        <div className="columns my-6 ">
            <div className="box column mx-6 content is-normal " style={{ opacity: "195%" }}>
                <button className="column delete is-offset-11  is-1 mt-4"></button>
                <h1 className="my-1 has-text-centered is-6 "> {title} </h1>
                <p className="column mx-4 has-text-justified" style={{ height: "15em", overflowY: "scroll" }}>
                    {act}
                </p>
                <div className="field is-grouped mx-5 columns mb-1">
                    <p className="control column has-text-centered">
                        <button className={buttonClasses}>
                            <i className="fa-solid fa-heart mr-2 has-text-danger"></i> Like
                        </button>
                    </p>
                    <p className="control column has-text-centered">
                        <button className={buttonClasses}>
                            <i className="fa-solid fa-circle-check mr-2 has-text-success"></i>I did it!
                        </button>
                    </p>
                    <p className="control column has-text-centered">
                        <button className={buttonClasses}>
                            💪 I will do it!
                        </button>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Post