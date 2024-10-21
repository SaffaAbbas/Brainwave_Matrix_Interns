// src/App.js
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
     <Team />
     <Testimonial />
      <Blog />
      <Footer /> 
    </div>
  );
}

export default App;
