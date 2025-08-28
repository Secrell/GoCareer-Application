import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

// Mock data untuk contoh
const companies = [
  {
    id: 1,
    name: "TechCorp Indonesia",
    logo: "https://via.placeholder.com/80x80?text=TC",
    industry: "Teknologi Informasi",
    location: "Jakarta",
    employees: "201-500",
    description: "Perusahaan teknologi terkemuka yang fokus pada pengembangan solusi digital inovatif untuk berbagai industri di Indonesia.",
    openJobs: 12,
    website: "https://techcorp.id",
    founded: "2015"
  },
  {
    id: 2,
    name: "StartupXYZ",
    logo: "https://via.placeholder.com/80x80?text=SX",
    industry: "Financial Technology",
    location: "Bandung",
    employees: "51-200",
    description: "Startup fintech yang mengembangkan aplikasi pembayaran digital dan layanan keuangan untuk UMKM di Indonesia.",
    openJobs: 8,
    website: "https://startupxyz.com",
    founded: "2018"
  },
  {
    id: 3,
    name: "Creative Agency",
    logo: "https://via.placeholder.com/80x80?text=CA",
    industry: "Digital Marketing",
    location: "Surabaya",
    employees: "11-50",
    description: "Agensi kreatif yang spesialisasi dalam digital marketing, branding, dan pengembangan konten untuk berbagai klien.",
    openJobs: 5,
    website: "https://creativeagency.id",
    founded: "2017"
  },
  {
    id: 4,
    name: "DataTech Solutions",
    logo: "https://via.placeholder.com/80x80?text=DT",
    industry: "Data Analytics",
    location: "Jakarta",
    employees: "101-200",
    description: "Perusahaan konsultan data yang membantu bisnis mengoptimalkan operasi mereka melalui analisis data dan machine learning.",
    openJobs: 15,
    website: "https://datatech.id",
    founded: "2016"
  },
  {
    id: 5,
    name: "InnovateCorp",
    logo: "https://via.placeholder.com/80x80?text=IC",
    industry: "Product Development",
    location: "Jakarta",
    employees: "501-1000",
    description: "Perusahaan product development yang menciptakan produk digital inovatif untuk meningkatkan produktivitas bisnis.",
    openJobs: 20,
    website: "https://innovatecorp.com",
    founded: "2012"
  },
  {
    id: 6,
    name: "CloudFirst",
    logo: "https://via.placeholder.com/80x80?text=CF",
    industry: "Cloud Computing",
    location: "Remote",
    employees: "201-500",
    description: "Penyedia layanan cloud computing dan infrastruktur digital untuk perusahaan enterprise di seluruh Asia Tenggara.",
    openJobs: 18,
    website: "https://cloudfirst.asia",
    founded: "2014"
  }
];

const industries = [
  "Semua Industri",
  "Teknologi Informasi",
  "Financial Technology",
  "Digital Marketing",
  "Data Analytics",
  "Product Development",
  "Cloud Computing",
  "E-commerce",
  "Healthcare",
  "Education"
];

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Jelajahi Perusahaan Terbaik
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Temukan tempat kerja impian Anda dari {companies.length}+ perusahaan terpercaya
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Cari nama perusahaan..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900">
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {companies.length} Perusahaan Ditemukan
          </h2>
          
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Ukuran Perusahaan</option>
              <option>1-10 karyawan</option>
              <option>11-50 karyawan</option>
              <option>51-200 karyawan</option>
              <option>201-500 karyawan</option>
              <option>500+ karyawan</option>
            </select>
            
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Lokasi</option>
              <option>Jakarta</option>
              <option>Bandung</option>
              <option>Surabaya</option>
              <option>Remote</option>
            </select>
            
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Urutkan</option>
              <option>Nama A-Z</option>
              <option>Nama Z-A</option>
              <option>Lowongan Terbanyak</option>
              <option>Terbaru</option>
            </select>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div key={company.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              {/* Company Header */}
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {company.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-1">
                    {company.industry}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {company.location}
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="space-y-3 mb-4">
                <p className="text-gray-700 text-sm line-clamp-3">
                  {company.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Karyawan:</span>
                    <p className="font-medium text-gray-900">{company.employees}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Didirikan:</span>
                    <p className="font-medium text-gray-900">{company.founded}</p>
                  </div>
                </div>
              </div>

              {/* Open Jobs */}
              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-800 font-medium">
                    {company.openJobs} Lowongan Aktif
                  </span>
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <Link
                  href={`/companies/${company.id}`}
                  className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Lihat Profil
                </Link>
                <Link
                  href={`/jobs?company=${company.id}`}
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
                >
                  Lihat Lowongan
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              3
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
