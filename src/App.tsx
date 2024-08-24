import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "#0E1015", color: "#FFFFFF", fontFamily: "Krona One, sans-serif" }}>
      <Header />
      <div style={{ padding: "0px" }}>
        <Body />
        <div style={{ marginTop: "40px" }}>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
