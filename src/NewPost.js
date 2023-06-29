import userEvent from "@testing-library/user-event"
import { useState } from "react"
function NewPost() {

    const [formData, setFormData] = useState({ username: "", title: "", act: "" })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        //console.log(formData)
    }

    function handleSubmit(e) {

        // 1 - Get Data from json File
        // 2- check if username exists
        //     - if true? post under the existing userEvent
        //     - if false? post a new user

    }
    return (

        <form onSubmit={handleSubmit}>
            <h1 className="has-text-centered is-size-3 my-4 has-text-weight-bold has-text">New Kindness</h1>
            <div className="columns">
                <div className="field column is-offset-one-quarter is-half">
                    <label className="label">Title</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Give a title to your kindness" style={{ borderRadius: "1.5em" }} onChange={handleChange} name="title" />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="field column is-offset-one-quarter is-half">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Type your username" style={{ borderRadius: "1.5em" }} onChange={handleChange} name="username" />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="field column is-offset-one-quarter is-half">
                    <label className="label">My new act of kindness :)</label>
                    <div className="control">
                        <textarea className="textarea" rows="10" placeholder="Spread your kindness to the world!" style={{ borderRadius: "1.5em" }} onChange={handleChange} name="act" />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="field column has-text-centered">
                    <p className="control">
                        <button className="button is-danger is-rounded has-text-weight-semibold" type="submit">
                            Submit
                        </button>
                    </p>
                </div>
            </div>

        </form>

    )
}

export default NewPost