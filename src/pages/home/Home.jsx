import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Review from "../../components/reviews/Review";
import Sport from "../../components/sport/Sport";
import "../../components/footer/Footer.css";
import "../../styles/global.css";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <main className="home-main">
        <h1>Home</h1>
        <h2>Introduction</h2>
        <p>Welcome to our sports meetings page, where sports enthusiasts can connect, organize, and participate in sports events. Whether you enjoy soccer, basketball, tennis, or any other sport, you will find a community of like-minded individuals here. Join us and take your passion for sports to the next level.</p>
        <h2>Available Sports</h2>
        <Sport />
        <h2>Reviews</h2>
        <Review />
      </main>
      <Footer />
    </>
  );
}

export default Home;