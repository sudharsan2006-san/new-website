import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GitHubStats from './components/GitHubStats';
import LinkedInCard from './components/LinkedInCard';
import Achievements from './sections/Achievements';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import ResumeCard from './components/ResumeCard';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ProgressBar from './components/ProgressBar';
import RevealSection from './components/RevealSection';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <ProgressBar />
      <Loader />
      <Navbar />
      <ErrorBoundary><Hero /></ErrorBoundary>
      <ErrorBoundary><RevealSection><About /></RevealSection></ErrorBoundary>
      <ErrorBoundary><RevealSection><Skills /></RevealSection></ErrorBoundary>
      <ErrorBoundary><RevealSection><Projects /></RevealSection></ErrorBoundary>
      <ErrorBoundary>
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GitHubStats />
            <LinkedInCard />
          </div>
        </RevealSection>
      </ErrorBoundary>
      <ErrorBoundary><RevealSection><Experience /></RevealSection></ErrorBoundary>
      <ErrorBoundary><RevealSection><Achievements /></RevealSection></ErrorBoundary>
      <ErrorBoundary><RevealSection><Certifications /></RevealSection></ErrorBoundary>
      <ErrorBoundary><RevealSection><ResumeCard /></RevealSection></ErrorBoundary>
      <ErrorBoundary><RevealSection><Contact /></RevealSection></ErrorBoundary>
      <ErrorBoundary><Footer /></ErrorBoundary>
    </main>
  );
}
