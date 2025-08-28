import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { JobCard } from "@/components/JobCard";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { mockJobs } from "@/data/mockData";
import Link from "next/link";

export default function HomePage() {
  const featuredJobs = mockJobs.slice(0, 6);
  const stats = [
    { label: "Lowongan Tersedia", value: mockJobs.length.toString() },
    { label: "Perusahaan", value: "50+" },
    { label: "Pengguna Aktif", value: "1000+" }
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Temukan Karir Impian Anda
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Platform terpercaya untuk menemukan pekerjaan terbaik dari perusahaan terkemuka di Indonesia
            </p>
            <SearchBar />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Lowongan Terbaru</h2>
              <p className="text-gray-600 mt-4">Temukan kesempatan karir terbaik untuk Anda</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/jobs" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
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
