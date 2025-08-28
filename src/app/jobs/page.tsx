"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { JobCard } from "@/components/JobCard";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { mockJobs } from "@/data/mockData";
import { useState } from "react";

export default function JobsPage() {
  const [selectedJobType, setSelectedJobType] = useState("Semua");

  const filteredJobs = mockJobs.filter(job => 
    selectedJobType === "Semua" || job.type === selectedJobType
  );

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
              <p className="text-lg mb-8">
                Ribuan lowongan kerja dari perusahaan terpercaya menanti Anda
              </p>
            </div>
            <SearchBar />
          </div>
        </section>

        {/* Filters and Jobs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h3 className="text-lg font-semibold mb-4">Filter Pekerjaan</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipe Pekerjaan
                    </label>
                    <select
                      value={selectedJobType}
                      onChange={(e) => setSelectedJobType(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Semua">Semua Tipe</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Freelance">Freelance</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Lowongan Kerja ({filteredJobs.length})
                </h2>
              </div>

              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Tidak ada lowongan yang sesuai dengan filter Anda.</p>
                </div>
              )}
            </div>
          </div>
        </section>

      <Footer />
    </div>
    </ProtectedRoute>
  );
}
