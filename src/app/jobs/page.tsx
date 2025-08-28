"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { JobCard } from "@/components/JobCard";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useState } from "react";

// Mock data untuk contoh
const allJobs = [
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
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "DataTech Solutions",
    location: "Jakarta",
    salary: "Rp 7.000.000 - 11.000.000",
    type: "Full-time",
    description: "Menganalisis data bisnis dan membuat insights untuk pengambilan keputusan",
    requirements: ["Python", "SQL", "Tableau"],
    postedDate: "4 hari yang lalu"
  },
  {
    id: 5,
    title: "Product Manager",
    company: "InnovateCorp",
    location: "Jakarta",
    salary: "Rp 15.000.000 - 20.000.000",
    type: "Full-time",
    description: "Memimpin pengembangan produk dari konsep hingga peluncuran",
    requirements: ["Product Management", "Agile", "Analytics"],
    postedDate: "5 hari yang lalu"
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudFirst",
    location: "Remote",
    salary: "Rp 12.000.000 - 18.000.000",
    type: "Full-time",
    description: "Mengelola infrastruktur cloud dan pipeline CI/CD",
    requirements: ["AWS", "Kubernetes", "Terraform"],
    postedDate: "1 minggu yang lalu"
  }
];

const categories = [
  "Semua",
  "Technology",
  "Design",
  "Marketing",
  "Sales",
  "Finance",
  "HR",
  "Operations"
];

const jobTypes = [
  "Semua",
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
  "Remote"
];

export default function JobsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedJobType, setSelectedJobType] = useState("Semua");
  const [sortBy, setSortBy] = useState("newest");

  const filteredJobs = allJobs.filter(job => {
    if (selectedJobType !== "Semua" && job.type !== selectedJobType) {
      return false;
    }
    return true;
  });

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Search Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Temukan Pekerjaan Impian Anda
            </h1>
            <p className="text-xl text-blue-100">
              {allJobs.length} lowongan tersedia
            </p>
          </div>
          <SearchBar />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Filter Lowongan</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Kategori</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2 text-blue-600"
                      />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Job Type Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Tipe Pekerjaan</h3>
                <div className="space-y-2">
                  {jobTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="jobType"
                        value={type}
                        checked={selectedJobType === type}
                        onChange={(e) => setSelectedJobType(e.target.value)}
                        className="mr-2 text-blue-600"
                      />
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Rentang Gaji</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">&lt; Rp 5 juta</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">Rp 5-10 juta</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">Rp 10-15 juta</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">&gt; Rp 15 juta</span>
                  </label>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Lokasi</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">Jakarta</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">Bandung</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">Surabaya</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-blue-600" />
                    <span className="text-gray-700">Remote</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Jobs List */}
          <div className="lg:w-3/4">
            {/* Sort and Results Count */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {filteredJobs.length} lowongan ditemukan
              </h2>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Terbaru</option>
                <option value="salary-high">Gaji Tertinggi</option>
                <option value="salary-low">Gaji Terendah</option>
                <option value="company">Nama Perusahaan</option>
              </select>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
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
        </div>
      </div>

      <Footer />
    </div>
    </ProtectedRoute>
  );
}
