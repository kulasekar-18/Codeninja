import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Core Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PaymentPage from "./pages/PaymentPage";

// Certificates
import StudentCertificates from "./pages/StudentCertificates";
import ProfessionalCertificates from "./pages/ProfessionalCertificates";
import BootcampCertificate from "./pages/BootcampCertificates";
import JobBootcamp from "./pages/JobBootcamp";
import IITCertifications from "./pages/IITCertifications";
import NewLaunches from "./pages/NewLaunches";

// ✅ New Pages for Graduates & College Students
import Graduates from "./pages/Graduates";
import CollegeStudents from "./pages/CollegeStudents";

// Community
import TenXClub from "./pages/TenXClub";
import StudentChapters from "./pages/StudentChapters";
import HireFromUs from "./pages/HireFromUs";

// Footer Pages
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import PricingRefund from "./pages/PricingRefund";
import BugBounty from "./pages/BugBounty";
import Review from "./pages/Review";
import PressRelease from "./pages/PressRelease";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Core */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Certificates */}
          <Route path="/student-certificates" element={<StudentCertificates />} />
          <Route path="/professional-certificates" element={<ProfessionalCertificates />} />
          <Route path="/bootcamp-certificates" element={<BootcampCertificate />} />
          <Route path="/job-bootcamp" element={<JobBootcamp />} />
          <Route path="/iit-certifications" element={<IITCertifications />} />
          <Route path="/new-launches" element={<NewLaunches />} />
          <Route path="/graduates" element={<Graduates />} />
          <Route path="/college-students" element={<CollegeStudents />} />

          {/* Community */}
          <Route path="/10x-club" element={<TenXClub />} />
          <Route path="/student-chapters" element={<StudentChapters />} />
          <Route path="/hire" element={<HireFromUs />} />

          {/* Footer Pages */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/pricing-refund" element={<PricingRefund />} />
          <Route path="/bug-bounty" element={<BugBounty />} />
          <Route path="/review" element={<Review />} />
          <Route path="/press-release" element={<PressRelease />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;