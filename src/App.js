import Navbar from "./Navbar";
import NewPost from "./NewPost";
import Post from "./Post";
function App() {
  const backgroundStyle = {
    backgroundImage: `url("/assets/background2.jpg")`,
    height: "1000px",
    backgroundSize: "cover"
  }
  return (
    <div style={backgroundStyle}>
      <Navbar />
      <NewPost />
    </div>
  );
}

export default App;
