import About from "../components/about";
import WhatsAppButton from "../components/button-wpp";
import Header from "../components/header";
import Navbar from "../components/navbar";
import FormStepper from "../components/contact";
import Photos from "components/photos";

const Home: React.FC = () => (
  <div>
    <Navbar />
    <Header />
    <About />
    <WhatsAppButton />
    <Photos />
    <FormStepper />
  </div>
);

export default Home;
