import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      {/* Global Grid Blueprint Overlay */}
      <div className="fixed inset-0 grid-blueprint pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Events />
        <Registration />
        <FAQ />
      </main>
      
      {/* Footer */}
      <Footer />
      
    </div>
  );
}

export default App;
