import Post from "./Post"
function OthersPosts() {
    const buttonClasses = "button is-warning has-text-weight-semibold is-rounded is-small"
    return (
        <div className="columns is-multiline">
            <div className="column is-half">
                <Post />
            </div>
            <div className="column is-half">
                <Post />
            </div>
            <div className="column is-half">
                <Post />
            </div>

        </div>

    )
}

export default OthersPosts