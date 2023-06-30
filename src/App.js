import { Route, Switch } from "react-router-dom";
import { useState } from "react";
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

  const [currentUser, setCurrentUser] = useState("user1")
  const [interactions, setInteractions] = useState({ like: 0, IDidIt: 0, IWillDoIt: 0 })
  function setUser(user) {
    setCurrentUser(user)
  }
  //console.log(interactions.like)

  function handleClick(e, id, postProperties) {
    const interaction = e.target.name
    setInteractions({
      ...interactions,
      [e.target.name]: interactions[interaction] += 1
    })
    // console.log(interactions)
    const patchedObj = {
      ...postProperties,
      ...interactions
    }
    console.log(patchedObj)
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(patchedObj)
    }

    fetch(`http://localhost:3000/users/${id}`, configObj)
      .then(r => r.json()).then(data => console.log(data))
  }


  return (
    <div style={backgroundStyle2} >
      <Navbar />
      <SetUser setCurrentUser={setUser} />
      <Switch>
        <Route exact path="/">
          <OthersPosts currentUser={currentUser} handleClick={handleClick} />
        </Route>
        <Route exact path="/MyKindness">
          <MyKindness currentUser={currentUser} handleClick={handleClick} />
        </Route>
        <Route exact path="/NewKindness">
          <NewPost user={currentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
