import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import NewPost from "./NewPost";
import OthersPosts from "./OthersPosts";
import MyKindness from "./MyKindness";
import SetUser from "./SetUser";
function App() {
  const backgroundStyle2 = {
    backgroundImage: `url("/assets/background2.jpg")`,
    height: "100%",
    backgroundSize: "cover"
  }

  const backgroundStyle = {
    backgroundColor: "#ffb6f0",

  }

  // dataChange variable to trigger the useEffect fetching when data is updated
  const [dataChange, setDataChange] = useState(false)
  //A variable for the current user of the app
  const [currentUser, setCurrentUser] = useState("user1")

  //Set the current user
  function setUser(user) {
    setCurrentUser(user)
  }

  //Triggering the click event for all buttons, all posts
  function handleClick(e, id) {
    //Patch object
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ [e.target.name]: Number(e.target.value) + 1 })
    }

    //Patch request updating the button count
    fetch(`https://random-acts-of-kindness-server.onrender.com/users/${id}`, configObj)
      .then(r => r.json()).then(data => setDataChange(!dataChange))
  }

  return (
    <div style={backgroundStyle} >
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
