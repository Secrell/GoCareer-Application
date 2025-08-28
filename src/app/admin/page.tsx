import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdminRoute } from "@/components/AdminRoute";
import { mockJobs, mockCompanies } from "@/data/mockData";

export default function AdminDashboard() {
  const stats = {
    totalJobs: mockJobs.length,
    totalCompanies: mockCompanies.length,
    totalUsers: 150,
    totalApplications: 89
  };

  return (
    <AdminRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Kelola platform GoCareer</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">Total Lowongan</h3>
              <p className="text-2xl font-bold text-blue-600">{stats.totalJobs}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">Total Perusahaan</h3>
              <p className="text-2xl font-bold text-green-600">{stats.totalCompanies}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
              <p className="text-2xl font-bold text-purple-600">{stats.totalUsers}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">Total Aplikasi</h3>
              <p className="text-2xl font-bold text-orange-600">{stats.totalApplications}</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                <h3 className="font-medium text-gray-900">Kelola Lowongan</h3>
                <p className="text-sm text-gray-600">Tambah, edit, atau hapus lowongan kerja</p>
              </button>
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                <h3 className="font-medium text-gray-900">Kelola Perusahaan</h3>
                <p className="text-sm text-gray-600">Verifikasi dan kelola profil perusahaan</p>
              </button>
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                <h3 className="font-medium text-gray-900">Kelola Users</h3>
                <p className="text-sm text-gray-600">Lihat dan kelola akun pengguna</p>
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </AdminRoute>
  );
}
