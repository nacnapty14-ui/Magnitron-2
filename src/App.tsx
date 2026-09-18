import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Breakthrough } from '@/components/Breakthrough';
import { HowItWorks } from '@/components/HowItWorks';
import { Results } from '@/components/Results';
import { Comparison } from '@/components/Comparison';
import { KeyDifferences } from '@/components/KeyDifferences';
import { Indications } from '@/components/Indications';
import { Prevention } from '@/components/Prevention';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Breakthrough />
        <HowItWorks />
        <Results />
        <Comparison />
        <KeyDifferences />
        <Indications />
        <Prevention />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
