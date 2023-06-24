function NewPost() {

    return (

        <form>
            <h1 className="has-text-centered is-size-3 my-4 has-text-weight-bold">New Kindness</h1>
            <div className="columns">
                <div class="field column is-offset-one-quarter is-half">
                    <label class="label">Title</label>
                    <div class="control">
                        <input className="input" type="text" placeholder="Give a title to your kindness" style={{ borderRadius: "1.5em" }} />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div class="field column is-offset-one-quarter is-half">
                    <label class="label">My new act of kindness :)</label>
                    <div class="control">
                        <textarea className="textarea" placeholder="Spread your kindness to the world!" style={{ borderRadius: "1.5em" }} />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div class="field column has-text-centered">
                    <p class="control">
                        <a class="button is-danger is-rounded">
                            Submit
                        </a>
                    </p>
                </div>
            </div>

        </form>

    )
}

export default NewPost