import { useState } from "react"
function SetUser({ setCurrentUser }) {

    const [username, setUsername] = useState("")
    const [isActive, setIsActive] = useState(true)
    const mainClasses = "modal is-active"

    function handleChange(e) {
        setUsername(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setCurrentUser(username)
        setIsActive(!isActive)
    }

    return (
        <div className={`modal ${isActive ? "modal is-active" : "modal"}`} style={{ backgroundColor: "#ffb6f0" }}>
            <div className="modal-background has-background-danger"></div>
            <div className="modal-content has-background-white px-5 py-6" style={{ borderRadius: "2em" }}>
                <h4 className="title my-2">Welcome to Random Acts of Kindness</h4>


                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input type="text" placeholder="Type your username" className="input is-rounded" name="username" onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="has-text-centered mt-5"><button className="button is-rounded is-danger" type="submit">Submit</button></div>

                </form>
            </div>
        </div>
    )
}
export default SetUser