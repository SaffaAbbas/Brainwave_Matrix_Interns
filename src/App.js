// src/App.js
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonial from './components/ClientReview';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ClientReview from './components/ClientReview';
function App() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
     <Team />
     <ClientReview/>
      <Blog />
      <Footer /> 
    </div>
  );
}

export default App;
