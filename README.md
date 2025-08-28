# GoCareer - Platform Lowongan Kerja Modern

GoCareer adalah aplikasi web modern untuk mencari dan melamar pekerjaan yang dibangun dengan Next.js, React, TypeScript, dan Tailwind CSS.

## 🚀 Fitur Utama

- **🔍 Pencarian Lowongan**: Cari pekerjaan berdasarkan posisi, kata kunci, dan lokasi
- **📋 Detail Lowongan**: Informasi lengkap tentang pekerjaan, persyaratan, dan fasilitas
- **📝 Form Aplikasi**: Interface mudah untuk melamar pekerjaan
- **� Direktori Perusahaan**: Jelajahi profil perusahaan dan budaya kerja
- **👤 Sistem Login/Register**: Autentikasi untuk job seeker dan employer
- **�🎯 Filter & Kategori**: Filter berdasarkan kategori, tipe pekerjaan, gaji, dan lokasi
- **📱 Responsive Design**: Optimal di semua perangkat
- **⚡ Performa Tinggi**: Dibangun dengan Next.js untuk loading yang cepat
- **🔒 Keamanan**: Validasi form dan perlindungan data pengguna

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Font**: Inter (Google Fonts)

## 📦 Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd gocareer
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📁 Struktur Project

```
src/
├── app/                    # App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── jobs/              # Jobs pages
│       ├── page.tsx       # Jobs listing
│       └── [id]/          
│           └── page.tsx   # Job detail
└── components/            # Reusable components
    ├── Header.tsx         # Navigation header
    ├── Footer.tsx         # Footer
    ├── SearchBar.tsx      # Search functionality
    └── JobCard.tsx        # Job card component
```

## 🎨 Komponen Utama

### Header
- Logo dan branding
- Menu navigasi
- Tombol login dan registrasi

### SearchBar
- Input pencarian posisi/kata kunci
- Input lokasi
- Tag pencarian populer
- Tombol pencarian

### JobCard
- Informasi dasar pekerjaan
- Badge tipe pekerjaan
- Lokasi dan gaji
- Skills/requirements
- Tombol aksi (detail dan lamar)

### Footer
- Informasi perusahaan
- Tautan cepat
- Informasi dukungan
- Social media links

## 📄 Halaman

1. **Homepage** (`/`)
   - Hero section dengan search bar
   - Statistik platform
   - Featured jobs
   - Call-to-action

2. **Jobs Listing** (`/jobs`)
   - Filter sidebar (kategori, tipe, gaji, lokasi)
   - Search dan sorting
   - Grid layout jobs
   - Pagination

3. **Job Detail** (`/jobs/[id]`)
   - Detail lengkap pekerjaan
   - Deskripsi, tanggung jawab, persyaratan
   - Informasi perusahaan
   - Form aplikasi modal

4. **Companies** (`/companies`)
   - Daftar perusahaan dengan filter
   - Informasi perusahaan dan lowongan aktif
   - Search dan kategori industri

5. **Company Detail** (`/companies/[id]`)
   - Profil lengkap perusahaan
   - Visi, misi, nilai perusahaan
   - Budaya kerja dan benefits
   - Lowongan tersedia

6. **Login** (`/login`)
   - Form login dengan validasi
   - Social login (Google, Facebook)
   - Remember me dan forgot password

7. **Register** (`/register`)
   - Form registrasi untuk job seeker dan employer
   - Validasi password yang kuat
   - Persetujuan terms dan privacy

8. **Forgot Password** (`/forgot-password`)
   - Reset password via email
   - Konfirmasi pengiriman email

9. **About** (`/about`)
   - Informasi tentang GoCareer
   - Tim, misi, visi, dan nilai perusahaan
   - Kontak dan cara bergabung

10. **Terms & Privacy** (`/terms`, `/privacy`)
    - Syarat dan ketentuan layanan
    - Kebijakan privasi dan perlindungan data

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#7c3aed)
- **Success**: Green (#059669)
- **Background**: Gray (#f9fafb)
- **Text**: Gray shades

### Typography
- **Font Family**: Inter
- **Headings**: Bold, various sizes
- **Body**: Regular, readable sizes

### Components
- **Cards**: White background, shadow, rounded corners
- **Buttons**: Blue primary, hover effects
- **Forms**: Clean inputs with focus states
- **Modals**: Overlay with centered content

## 🚀 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🔮 Pengembangan Selanjutnya

- [ ] Integrasi database (PostgreSQL/MongoDB)
- [ ] Authentication sistem
- [ ] API endpoints untuk jobs
- [ ] File upload untuk CV
- [ ] Email notifications
- [ ] Advanced search filters
- [ ] Company profiles
- [ ] User dashboard
- [ ] Job recommendations
- [ ] Analytics dashboard

## 📝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/nama-fitur`)
3. Commit changes (`git commit -m 'Menambah fitur baru'`)
4. Push ke branch (`git push origin feature/nama-fitur`)
5. Buat Pull Request

## 📄 Lisensi

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 📞 Kontak

Untuk pertanyaan atau saran, silakan hubungi:
- Email: info@gocareer.com
- Website: https://gocareer.com

---

Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS
# GoCareer-Application
# GoCareer-Application
# GoCareer-Application
# GoCareer-Application
