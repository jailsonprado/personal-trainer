import Contact from "../components/contact";
import About from "../components/about";
import WhatsAppButton from "../components/button-wpp";
import Header from "../components/header";
import Navbar from "../components/navbar";

const Home: React.FC = () => (
  <div>
    <Navbar />
    <Header />
    <About />
    <WhatsAppButton />
    {/* <Contact /> */}
  </div>
);

export default Home;
