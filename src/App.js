import Navbar from "./Navbar";
import NewPost from "./NewPost";
import Post from "./Post";
import OthersPosts from "./OthersPosts";
function App() {
  const backgroundStyle = {
    backgroundImage: `url("/assets/background2.jpg")`,
    height: "1000px",
    backgroundSize: "cover"
  }

  const backgroundStyle2 = {
    backgroundColor: "#ffb6f0",

  }

  const colors = ["#f43333", "#ff98b8", "#ffb6f0", "#ff7cc0", "#ff8789"]
  //style={backgroundStyle}
  return (
    <div style={backgroundStyle2} >
      <Navbar />
      <OthersPosts />
      {/* <Post /> */}
    </div>
  );
}

export default App;
