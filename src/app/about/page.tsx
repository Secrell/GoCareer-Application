import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Link from "next/link";

export default function AboutPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang GoCareer
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Platform terpercaya yang menghubungkan talenta terbaik dengan perusahaan berkualitas di Indonesia
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Misi Kami
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                GoCareer hadir untuk mempermudah proses pencarian kerja dan rekrutmen di Indonesia. 
                Kami percaya bahwa setiap orang berhak mendapatkan pekerjaan yang sesuai dengan 
                passion dan keahlian mereka.
              </p>
              <p className="text-lg text-gray-700">
                Dengan teknologi modern dan pendekatan yang user-friendly, kami membantu ribuan 
                pencari kerja menemukan karir impian mereka dan membantu perusahaan menemukan 
                talenta terbaik.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                  <div className="text-gray-600">Pengguna Aktif</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Perusahaan Partner</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Lowongan Aktif</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">5K+</div>
                  <div className="text-gray-600">Penempatan Berhasil</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparansi</h3>
              <p className="text-gray-600">
                Informasi yang jelas dan transparan tentang perusahaan, gaji, dan persyaratan kerja.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Efisiensi</h3>
              <p className="text-gray-600">
                Platform yang mudah digunakan dengan fitur pencarian dan filter yang powerful.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Komunitas</h3>
              <p className="text-gray-600">
                Membangun komunitas profesional yang saling mendukung dan berbagi pengalaman.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tim Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tim berpengalaman yang berdedikasi untuk memberikan layanan terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/120x120?text=JD"
                alt="John Doe"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">John Doe</h3>
              <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Berpengalaman 10+ tahun di industri HR dan teknologi, passionate dalam membantu orang menemukan karir yang tepat.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/120x120?text=JS"
                alt="Jane Smith"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-blue-600 font-medium mb-3">CTO</p>
              <p className="text-gray-600 text-sm">
                Tech enthusiast dengan keahlian dalam pengembangan platform digital dan user experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/120x120?text=MB"
                alt="Mike Brown"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mike Brown</h3>
              <p className="text-blue-600 font-medium mb-3">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Spesialis dalam operasional dan partnership, memastikan layanan berjalan dengan optimal.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Hubungi Kami
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">info@gocareer.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">+62 21 1234 5678</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Tertarik Bekerja dengan Kami?
              </h3>
              <p className="text-gray-600 mb-6">
                Kami selalu mencari talenta terbaik untuk bergabung dengan tim GoCareer. 
                Lihat lowongan yang tersedia atau kirim CV Anda.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/jobs?company=gocareer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Lihat Lowongan
                </Link>
                <Link
                  href="/contact"
                  className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Kontak Kami
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
    </ProtectedRoute>
  );
}
