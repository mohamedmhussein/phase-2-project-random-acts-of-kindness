function Post({ act, title, user, like, IDidIt, IWillDoIt, id, handleClick }) {
    const buttonClasses = "button is-warning has-text-weight-semibold is-rounded"

    return (
        <div className="columns my-6 ">
            <div className="box column mx-6 content is-normal " style={{ opacity: "195%" }}>
                <h1 className="mt-5 mb-3 has-text-centered is-6 "> {title} </h1>
                {{ user } ? <h4 className="my-1 has-text-centered is-6 has-text-weight-light	"> By: {user} </h4> : {}}
                <p className="column mx-4 has-text-justified is-size-6" style={{ height: "15em", overflowY: "scroll" }}>
                    {act}
                </p>
                <div className="field is-grouped mx-5 columns mb-1">
                    <p className="control column has-text-centered">
                        <button className={buttonClasses} name="like" value={like} onClick={(e) => handleClick(e, id)}>
                            <i className="fa-solid fa-heart mr-2 has-text-danger"  ></i> Like {like}
                        </button>
                    </p>
                    <p className="control column has-text-centered">
                        <button className={buttonClasses} name="IDidIt" value={IDidIt} onClick={(e) => handleClick(e, id)}>
                            <i className="fa-solid fa-circle-check mr-2 has-text-success" ></i>I did it! {IDidIt}
                        </button>
                    </p>
                    <p className="control column has-text-centered">
                        <button className={buttonClasses} name="IWillDoIt" value={IWillDoIt} onClick={(e) => handleClick(e, id)}>
                            💪 I will do it! {IWillDoIt}
                        </button>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Post