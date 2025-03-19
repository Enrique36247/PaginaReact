import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Basket.css";
import BasketCourts from "../../components/courts/BasketCourts";

function Basket() {
  return (
    <div className="page-container">
      <Header />
      <main className="content">
        <h1>Basket</h1>
        <BasketCourts />
      </main>
      <Footer />
    </div>
  );
}
export default Basket;