import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Terms.css";

function Terms() {
  return (
    <div className="page-container">
      <Header />
      <main className="content">
        <h1>Terms and Conditions</h1>
        <p>Welcome to GameFinder. By using our website, you agree to the following terms and conditions:</p>
        <ul>
          <li>You must use the website responsibly and respectfully.</li>
          <li>All content is for informational purposes only.</li>
          <li>We are not liable for any issues arising from the use of this website.</li>
        </ul>
        <h2>Privacy Policy</h2>
        <p>We value your privacy. Any personal information collected will be used solely for improving your experience on our platform.</p>
        <h2>Prohibited Activities</h2>
        <ul>
          <li>Using the website for illegal purposes.</li>
          <li>Posting harmful or offensive content.</li>
          <li>Attempting to hack or disrupt the website.</li>
        </ul>
        <h2>Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Please review this page periodically for updates.</p>
        <p>For more details, please contact us at support@gamefinder.com.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Terms;
