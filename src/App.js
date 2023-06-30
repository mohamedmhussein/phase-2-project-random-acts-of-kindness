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

  function handleClick(e) {
    console.log(e.target.name)
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
