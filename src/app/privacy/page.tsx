import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Kebijakan Privasi
          </h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Terakhir diperbarui:</strong> 26 Agustus 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Pendahuluan</h2>
              <p className="text-gray-700 mb-4">
                GoCareer berkomitmen untuk melindungi privasi dan keamanan data pribadi pengguna. 
                Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
              
              <h3 className="text-lg font-medium text-gray-900 mb-3">2.1 Informasi yang Anda Berikan</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Data profil (nama, email, nomor telepon)</li>
                <li>Informasi CV dan riwayat pekerjaan</li>
                <li>Preferensi pencarian kerja</li>
                <li>Komunikasi dengan kami</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">2.2 Informasi yang Dikumpulkan Otomatis</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Data penggunaan platform (log aktivitas, halaman yang dikunjungi)</li>
                <li>Informasi perangkat (IP address, browser, sistem operasi)</li>
                <li>Cookies dan teknologi pelacakan serupa</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Penggunaan Informasi</h2>
              <p className="text-gray-700 mb-4">Kami menggunakan informasi Anda untuk:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Menyediakan dan meningkatkan layanan platform</li>
                <li>Mencocokkan Anda dengan lowongan kerja yang relevan</li>
                <li>Mengirimkan notifikasi dan update penting</li>
                <li>Melakukan analisis untuk pengembangan fitur</li>
                <li>Menjaga keamanan dan mencegah penyalahgunaan</li>
                <li>Mematuhi kewajiban hukum</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Berbagi Informasi</h2>
              <p className="text-gray-700 mb-4">Kami dapat membagikan informasi Anda kepada:</p>
              
              <h3 className="text-lg font-medium text-gray-900 mb-3">4.1 Perusahaan Perekrut</h3>
              <p className="text-gray-700 mb-4">
                Ketika Anda melamar pekerjaan, informasi profil dan CV Anda akan dibagikan kepada perusahaan terkait.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">4.2 Penyedia Layanan</h3>
              <p className="text-gray-700 mb-4">
                Partner teknis yang membantu kami mengoperasikan platform (hosting, analytics, customer support).
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">4.3 Kewajiban Hukum</h3>
              <p className="text-gray-700 mb-4">
                Ketika diharuskan oleh hukum atau untuk melindungi hak dan keamanan platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Keamanan Data</h2>
              <p className="text-gray-700 mb-4">
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk melindungi data Anda:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Enkripsi data sensitif</li>
                <li>Akses terbatas pada basis kebutuhan</li>
                <li>Pemantauan keamanan berkelanjutan</li>
                <li>Backup data secara teratur</li>
                <li>Pelatihan keamanan untuk karyawan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Hak Pengguna</h2>
              <p className="text-gray-700 mb-4">Anda memiliki hak untuk:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Akses:</strong> Melihat data pribadi yang kami miliki</li>
                <li><strong>Koreksi:</strong> Memperbarui informasi yang tidak akurat</li>
                <li><strong>Penghapusan:</strong> Meminta penghapusan data Anda</li>
                <li><strong>Portabilitas:</strong> Mendapatkan salinan data dalam format standar</li>
                <li><strong>Pembatasan:</strong> Membatasi penggunaan data tertentu</li>
                <li><strong>Keberatan:</strong> Menolak penggunaan data untuk tujuan tertentu</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies dan Teknologi Pelacakan</h2>
              <p className="text-gray-700 mb-4">
                Kami menggunakan cookies untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Mengingat preferensi dan pengaturan Anda</li>
                <li>Menganalisis penggunaan platform</li>
                <li>Menyediakan fitur keamanan</li>
                <li>Personalisasi konten dan iklan</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Retensi Data</h2>
              <p className="text-gray-700 mb-4">
                Kami menyimpan data pribadi Anda selama:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Akun masih aktif atau diperlukan untuk menyediakan layanan</li>
                <li>Diperlukan untuk mematuhi kewajiban hukum</li>
                <li>Diperlukan untuk menyelesaikan sengketa</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Transfer Data Internasional</h2>
              <p className="text-gray-700 mb-4">
                Data Anda dapat diproses di server yang berlokasi di luar Indonesia. 
                Kami memastikan transfer tersebut dilakukan dengan perlindungan yang memadai.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Perubahan Kebijakan</h2>
              <p className="text-gray-700 mb-4">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                Perubahan material akan dinotifikasi melalui email atau pengumuman di platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Kontak</h2>
              <p className="text-gray-700 mb-4">
                Untuk pertanyaan tentang kebijakan privasi atau untuk menggunakan hak Anda, hubungi:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@gocareer.com<br />
                  <strong>Alamat:</strong> Jakarta, Indonesia<br />
                  <strong>Data Protection Officer:</strong> dpo@gocareer.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
