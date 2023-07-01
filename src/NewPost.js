import { useState } from "react"

function NewPost({ user, dataChange, setDataChange }) {


    const [formData, setFormData] = useState({ user: user, title: "", act: "", like: 0, IDidIt: 0, IWillDoIt: 0 })

    //Updating the form Data based on the user input
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // Post object
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }
        // Posting the user input to the server (notice triggering data change to re-rendering the linked components.)
        fetch("http://localhost:3000/users/", configObj)
            .then(r => r.json())
            .then(data => setDataChange(!dataChange))

        //resetting the form
        document.getElementById("form").reset();

    }



    return (

        <form onSubmit={handleSubmit} id="form">
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