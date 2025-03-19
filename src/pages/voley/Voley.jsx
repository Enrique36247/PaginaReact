import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Voley.css";
import VoleyCourts from "../../components/courts/VoleyCourts";

function Voley() {
  return (
    <div className="page-container">
      <Header />
      <main className="content">
        <h1>Voley</h1>
        <VoleyCourts />
      </main>
      <Footer />
    </div>
  );
}
export default Voley;