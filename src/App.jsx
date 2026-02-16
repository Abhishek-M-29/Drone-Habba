import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Eligibility from './components/Eligibility';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Eligibility />
        <Events />
        <Timeline />
        <Registration />
        <FAQ />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
