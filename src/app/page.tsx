import { JobCard } from "@/components/JobCard";
import { SearchBar } from "@/components/SearchBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Link from "next/link";

// Mock data untuk contoh
const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Indonesia",
    location: "Jakarta",
    salary: "Rp 8.000.000 - 12.000.000",
    type: "Full-time",
    description: "Mencari frontend developer berpengalaman dengan React dan TypeScript",
    requirements: ["React", "TypeScript", "Tailwind CSS"],
    postedDate: "2 hari yang lalu"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "StartupXYZ",
    location: "Bandung",
    salary: "Rp 10.000.000 - 15.000.000",
    type: "Full-time",
    description: "Backend developer untuk mengembangkan API dan sistem backend",
    requirements: ["Node.js", "PostgreSQL", "Docker"],
    postedDate: "1 hari yang lalu"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Agency",
    location: "Surabaya",
    salary: "Rp 6.000.000 - 9.000.000",
    type: "Full-time",
    description: "Designer kreatif untuk mengembangkan interface aplikasi mobile dan web",
    requirements: ["Figma", "Adobe Creative Suite", "User Research"],
    postedDate: "3 hari yang lalu"
  }
];

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Temukan Karir Impian Anda
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Platform terpercaya untuk mencari lowongan kerja terbaik di Indonesia
            </p>
            <SearchBar />
          </div>
        </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-gray-600">Lowongan Aktif</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Perusahaan Terdaftar</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Pengguna Aktif</div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lowongan Terbaru
            </h2>
            <p className="text-lg text-gray-600">
              Jelajahi peluang karir terbaik dari perusahaan terkemuka
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/jobs"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Lihat Semua Lowongan
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </ProtectedRoute>
  );
}
