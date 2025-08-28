import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Syarat dan Ketentuan
          </h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Terakhir diperbarui:</strong> 26 Agustus 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Penerimaan Syarat</h2>
              <p className="text-gray-700 mb-4">
                Dengan mengakses dan menggunakan platform GoCareer, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. 
                Jika Anda tidak setuju dengan syarat-syarat ini, mohon untuk tidak menggunakan layanan kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Definisi Layanan</h2>
              <p className="text-gray-700 mb-4">
                GoCareer adalah platform online yang menghubungkan pencari kerja dengan perusahaan penyedia lowongan kerja. 
                Kami menyediakan fasilitas untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Pencarian dan penelusuran lowongan kerja</li>
                <li>Pendaftaran dan pengelolaan profil pengguna</li>
                <li>Pengiriman lamaran kerja</li>
                <li>Komunikasi antara pencari kerja dan perusahaan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Registrasi dan Akun</h2>
              <p className="text-gray-700 mb-4">
                Untuk menggunakan layanan tertentu, Anda perlu membuat akun dengan memberikan informasi yang akurat dan lengkap. 
                Anda bertanggung jawab untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Menjaga kerahasiaan informasi akun Anda</li>
                <li>Memperbarui informasi yang tidak akurat</li>
                <li>Melaporkan penggunaan akun yang tidak sah</li>
                <li>Tidak berbagi akun dengan pihak lain</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Penggunaan Platform</h2>
              <p className="text-gray-700 mb-4">Anda setuju untuk tidak:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Mengunggah informasi palsu atau menyesatkan</li>
                <li>Melanggar hukum yang berlaku</li>
                <li>Mengganggu atau merusak operasional platform</li>
                <li>Menyalahgunakan data pribadi pengguna lain</li>
                <li>Melakukan spam atau aktivitas yang merugikan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Konten Pengguna</h2>
              <p className="text-gray-700 mb-4">
                Anda tetap memiliki hak atas konten yang Anda unggah, namun memberikan lisensi kepada GoCareer untuk 
                menggunakan, menampilkan, dan mendistribusikan konten tersebut dalam rangka menyediakan layanan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Privasi</h2>
              <p className="text-gray-700 mb-4">
                Penggunaan data pribadi Anda diatur dalam Kebijakan Privasi kami. Dengan menggunakan layanan ini, 
                Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan tersebut.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Tanggung Jawab</h2>
              <p className="text-gray-700 mb-4">
                GoCareer berperan sebagai perantara antara pencari kerja dan perusahaan. Kami tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Keakuratan informasi lowongan yang diposting oleh perusahaan</li>
                <li>Proses rekrutmen dan keputusan hiring</li>
                <li>Hubungan kerja antara karyawan dan perusahaan</li>
                <li>Kerusakan atau kerugian yang timbul dari penggunaan platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Perubahan Syarat</h2>
              <p className="text-gray-700 mb-4">
                Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan dinotifikasi melalui platform 
                dan akan berlaku efektif setelah diumumkan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Penghentian Layanan</h2>
              <p className="text-gray-700 mb-4">
                Kami dapat menghentikan atau membatasi akses Anda ke platform jika terjadi pelanggaran terhadap 
                syarat dan ketentuan ini.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Kontak</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami di:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@gocareer.com<br />
                  <strong>Alamat:</strong> Jakarta, Indonesia
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
