import Navbar from "./Navbar";
import Post
  from "./Post";
function App() {
  const backgroundStyle = {
    backgroundImage: `url("/assets/background2.jpg")`,
    height: "1000px",
    backgroundSize: "cover"
  }
  return (
    <div style={backgroundStyle}>
      <Navbar />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
