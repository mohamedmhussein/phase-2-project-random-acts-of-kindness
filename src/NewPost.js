function NewPost() {

    return (

        <form>
            <h1 className="has-text-centered is-size-3 my-4 has-text-weight-bold has-text">New Kindness</h1>
            <div className="columns">
                <div className="field column is-offset-one-quarter is-half">
                    <label className="label">Title</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Give a title to your kindness" style={{ borderRadius: "1.5em" }} />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="field column is-offset-one-quarter is-half">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Type your username" style={{ borderRadius: "1.5em" }} />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="field column is-offset-one-quarter is-half">
                    <label className="label">My new act of kindness :)</label>
                    <div className="control">
                        <textarea className="textarea" rows="10" placeholder="Spread your kindness to the world!" style={{ borderRadius: "1.5em" }} />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="field column has-text-centered">
                    <p className="control">
                        <a className="button is-danger is-rounded">
                            Submit
                        </a>
                    </p>
                </div>
            </div>

        </form>

    )
}

export default NewPost