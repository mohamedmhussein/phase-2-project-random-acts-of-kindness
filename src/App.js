import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import NewPost from "./NewPost";
import OthersPosts from "./OthersPosts";
import MyKindness from "./MyKindness";
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
  return (
    <div style={backgroundStyle2} >
      <Navbar />
      <Switch>
        <Route exact path="/users">
          <OthersPosts currentUser={currentUser} />
        </Route>
        <Route exact path="/users/MyKindness">
          <MyKindness currentUser={currentUser} />
        </Route>
        <Route exact path="/users/NewKindness">
          <NewPost />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
