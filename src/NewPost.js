import { useState } from "react"

function NewPost({ user }) {
    const [formData, setFormData] = useState({ username: user, title: "", act: "" })
    const [data, setData] = useState("")
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        //console.log(formData)
    }

    function handleSubmit(e) {
        e.preventDefault()
        document.getElementById("form").reset();
        // 1 - Get Data from json File
        // 2- check if username exists
        //     - if true? update under the existing user
        //     - if false? post a new user
        fetch("http://localhost:3000/users")
            .then(r => r.json())
            .then(data => {
                console.log(data)
                const usersList = Object.keys(data)
                usersList.includes(user) ? addNewUser(user) : updateUser(user)
            })

    }
    function addNewUser(username) {
        const configObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                [username]: [
                    {
                        title: formData.title,
                        act: formData.act
                    }]
            })


        }

        // fetch('http://localhost:3000/', configObj)
        //     .then(res => res.json())
        //     .then(data => addData(data)) //THIS STATE UPDATE IS REQUIRED!!!
    }
    // function addData(userdata) {
    //     setData(userdata)
    //     console.log(data)
    // }
    function updateUser(user) { }
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