import { Link } from "react-router-dom";

function Community() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Our Community</h1>
      <p className="mb-8 text-lg">
        Explore our different community initiatives and join us in building the future.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Link
          to="/community/10x-club"
          className="bg-white text-black rounded-xl p-6 shadow-lg hover:scale-105 transition"
        >
          <h2 className="text-2xl font-semibold mb-3">🚀 10x Club</h2>
          <p>Exclusive club for innovators and high achievers.</p>
        </Link>

        <Link
          to="/community/student-chapters"
          className="bg-white text-black rounded-xl p-6 shadow-lg hover:scale-105 transition"
        >
          <h2 className="text-2xl font-semibold mb-3">🎓 Student Chapters</h2>
          <p>Collaborate, learn, and grow with student-driven chapters.</p>
        </Link>

        <Link
          to="/community/hire"
          className="bg-white text-black rounded-xl p-6 shadow-lg hover:scale-105 transition"
        >
          <h2 className="text-2xl font-semibold mb-3">💼 Hire From Us</h2>
          <p>Connect with top talent trained in our programs.</p>
        </Link>
      </div>
    </div>
  );
}

export default Community;