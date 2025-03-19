import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./futbol.css";
import FutbolCourts from "../../components/courts/FutbolCourts";

function Futbol() {
  return (
    <div className="page-container">
      <Header />
      <main className="content">
        <h1>Futbol</h1>
        <FutbolCourts />
      </main>
      <Footer />
    </div>
  );
}
export default Futbol;