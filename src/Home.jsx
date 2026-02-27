import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import SafeVoice from "./SafeVoice";
import EventPulse from "./components/EventPulse";
import ComplaintBox from "./components/ComplaintBox";

function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300">

      <Navbar />

      <main className="max-w-7xl mx-auto px-12 py-12 space-y-20">

        {/* Hero Section */}
        <Hero />

        {/* Features + Complaint */}
        <div className="space-y-16">
          <FeatureCards />
          <ComplaintBox />
        </div>

      </main>
    </div>
  );
}

export default Home;