import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NewPost from "./NewPost";
import OthersPosts from "./OthersPosts";
import MyKindness from "./MyKindness";
import SetUser from "./SetUser";
function App() {
  const backgroundStyle = {
    backgroundImage: `url("/assets/background2.jpg")`,
    height: "1000px",
    backgroundSize: "cover"
  }

  const backgroundStyle2 = {
    backgroundColor: "#ffb6f0",

  }
  // const colors = ["#f43333", "#ff98b8", "#ffb6f0", "#ff7cc0", "#ff8789"]
  //style={backgroundStyle}

  // dataChange variable to trigger the useEffect fetching when data is updated
  const [dataChange, setDataChange] = useState(false)
  //A variable for the current user of the app
  const [currentUser, setCurrentUser] = useState("user1")
  // a state variable for the interactions (button clicks) on posts
  const [interactions, setInteractions] = useState({ like: 0, IDidIt: 0, IWillDoIt: 0 })

  //Set the current user
  function setUser(user) {
    setCurrentUser(user)
  }

  function handleClick(e, id) {
    const interaction = e.target.name
    setInteractions({
      ...interactions,
      [e.target.name]: interactions[interaction] += 1
    })

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(interactions)
    }

    fetch(`http://localhost:3000/users/${id}`, configObj)
      .then(r => r.json()).then(data => setDataChange(!dataChange))
  }


  return (
    <div style={backgroundStyle2} >
      <Navbar />
      <SetUser setCurrentUser={setUser} />
      <Switch>
        <Route exact path="/">
          <OthersPosts currentUser={currentUser} handleClick={handleClick} dataChange={dataChange} />
        </Route>
        <Route exact path="/MyKindness">
          <MyKindness currentUser={currentUser} handleClick={handleClick} dataChange={dataChange} />
        </Route>
        <Route exact path="/NewKindness">
          <NewPost user={currentUser} dataChange={dataChange} setDataChange={setDataChange} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
