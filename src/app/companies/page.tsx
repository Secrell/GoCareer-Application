import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { mockCompanies } from "@/data/mockData";
import Link from "next/link";

export default function CompaniesPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Perusahaan Partner Kami
            </h1>
            <p className="text-lg mb-8">
              Bergabunglah dengan perusahaan-perusahaan terbaik di Indonesia
            </p>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Perusahaan Terpercaya ({mockCompanies.length})
            </h2>
            <p className="text-gray-600">
              Temukan perusahaan yang sesuai dengan visi karir Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCompanies.map((company) => (
              <Link key={company.id} href={`/companies/${company.id}`}>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                      <p className="text-sm text-gray-600">{company.industry}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Lokasi:</span>
                      <span>{company.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Karyawan:</span>
                      <span>{company.employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lowongan:</span>
                      <span className="text-blue-600 font-medium">{company.jobCount} posisi</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                      Lihat Profil
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}
