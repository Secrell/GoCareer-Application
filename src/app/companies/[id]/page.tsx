import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import Link from "next/link";

// Mock data untuk contoh
const companyDetail = {
  id: 1,
  name: "TechCorp Indonesia",
  logo: "https://via.placeholder.com/120x120?text=TC",
  industry: "Teknologi Informasi",
  location: "Jakarta",
  employees: "201-500",
  founded: "2015",
  website: "https://techcorp.id",
  description: `TechCorp Indonesia adalah perusahaan teknologi terkemuka yang fokus pada pengembangan solusi digital inovatif untuk berbagai industri di Indonesia. Kami berkomitmen untuk menciptakan teknologi yang dapat membantu bisnis berkembang dan memberikan dampak positif bagi masyarakat.

Dengan tim yang terdiri dari engineer, designer, dan product manager berpengalaman, kami telah berhasil mengembangkan berbagai produk digital yang digunakan oleh jutaan pengguna di Indonesia.`,
  vision: "Menjadi perusahaan teknologi terdepan di Asia Tenggara yang menciptakan solusi inovatif untuk masa depan yang lebih baik.",
  mission: "Mengembangkan teknologi yang mudah diakses, user-friendly, dan memberikan nilai tambah bagi bisnis dan masyarakat.",
  values: [
    "Innovation - Selalu berinovasi dalam setiap solusi yang kami kembangkan",
    "Collaboration - Bekerja sama untuk mencapai tujuan bersama",
    "Excellence - Berkomitmen untuk memberikan kualitas terbaik",
    "Integrity - Menjunjung tinggi kejujuran dan transparansi"
  ],
  benefits: [
    "Gaji kompetitif dan bonus kinerja",
    "Asuransi kesehatan premium",
    "Flexible working hours",
    "Work from home options",
    "Professional development budget",
    "Team building dan company retreat",
    "Free lunch dan snacks",
    "Gym membership",
    "Stock option program",
    "Parental leave"
  ],
  culture: [
    "🚀 Fast-paced startup environment",
    "👥 Collaborative team culture",
    "📚 Continuous learning mindset",
    "🎯 Results-oriented approach",
    "🌱 Growth and development focused"
  ],
  socialMedia: {
    linkedin: "https://linkedin.com/company/techcorp-indonesia",
    instagram: "https://instagram.com/techcorp_id",
    twitter: "https://twitter.com/techcorp_id"
  }
};

const companyJobs = [
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
    id: 4,
    title: "Backend Developer",
    company: "TechCorp Indonesia",
    location: "Jakarta",
    salary: "Rp 10.000.000 - 15.000.000",
    type: "Full-time",
    description: "Backend developer untuk mengembangkan API dan sistem backend",
    requirements: ["Node.js", "PostgreSQL", "Docker"],
    postedDate: "1 minggu yang lalu"
  },
  {
    id: 7,
    title: "Product Manager",
    company: "TechCorp Indonesia",
    location: "Jakarta",
    salary: "Rp 15.000.000 - 20.000.000",
    type: "Full-time",
    description: "Memimpin pengembangan produk dari konsep hingga peluncuran",
    requirements: ["Product Management", "Agile", "Analytics"],
    postedDate: "3 hari yang lalu"
  }
];

export default function CompanyDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Company Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Company Logo */}
            <img
              src={companyDetail.logo}
              alt={`${companyDetail.name} logo`}
              className="w-32 h-32 rounded-lg object-cover shadow-md"
            />
            
            {/* Company Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {companyDetail.name}
              </h1>
              <p className="text-xl text-blue-600 font-medium mb-4">
                {companyDetail.industry}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {companyDetail.location}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {companyDetail.employees} karyawan
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                  </svg>
                  Didirikan {companyDetail.founded}
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col space-y-3 w-full md:w-auto">
              <Link
                href={companyDetail.website}
                target="_blank"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Kunjungi Website
              </Link>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Follow Perusahaan
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Company */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Perusahaan</h2>
              <div className="prose prose-blue max-w-none">
                {companyDetail.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Visi & Misi</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Visi</h3>
                  <p className="text-gray-700">{companyDetail.vision}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Misi</h3>
                  <p className="text-gray-700">{companyDetail.mission}</p>
                </div>
              </div>
            </div>

            {/* Company Values */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nilai-Nilai Perusahaan</h2>
              <div className="space-y-4">
                {companyDetail.values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Positions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Lowongan Tersedia ({companyJobs.length})
                </h2>
                <Link
                  href={`/jobs?company=${companyDetail.id}`}
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  Lihat Semua →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companyJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Culture */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Budaya Kerja</h3>
              <div className="space-y-3">
                {companyDetail.culture.map((item, index) => (
                  <div key={index} className="text-gray-700 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fasilitas & Tunjangan</h3>
              <div className="space-y-2">
                {companyDetail.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ikuti Kami</h3>
              <div className="space-y-3">
                <a
                  href={companyDetail.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={companyDetail.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-pink-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.357-.868-.868-1.357-2.019-1.357-3.316 0-1.297.49-2.448 1.357-3.316.868-.868 2.019-1.357 3.316-1.357 1.297 0 2.448.49 3.316 1.357.868.868 1.357 2.019 1.357 3.316 0 1.297-.49 2.448-1.357 3.316-.868.868-2.019 1.357-3.316 1.357z"/>
                  </svg>
                  Instagram
                </a>
                <a
                  href={companyDetail.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-400 transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontak</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  {companyDetail.website}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  careers@techcorp.id
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
