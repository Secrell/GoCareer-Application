"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";

interface ProfileData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  dateOfBirth: string;
  gender: string;
  
  // Professional Information
  currentPosition: string;
  experience: string;
  expectedSalary: string;
  skills: string[];
  education: EducationData[];
  workExperience: WorkExperienceData[];
  
  // Additional Info
  bio: string;
  linkedinUrl: string;
  portfolioUrl: string;
  resumeUrl: string;
}

interface EducationData {
  id: string;
  institution: string;
  degree: string;
  major: string;
  startYear: string;
  endYear: string;
  gpa: string;
}

interface WorkExperienceData {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  isCurrentJob: boolean;
}

export default function ProfilePage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    dateOfBirth: "",
    gender: "",
    currentPosition: "",
    experience: "",
    expectedSalary: "",
    skills: [],
    education: [],
    workExperience: [],
    bio: "",
    linkedinUrl: "",
    portfolioUrl: "",
    resumeUrl: ""
  });

  const [newSkill, setNewSkill] = useState("");

  // Load profile data from localStorage on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem(`gocareer_profile_${user?.id}`);
    if (savedProfile) {
      try {
        const parsedProfile = JSON.parse(savedProfile);
        setProfileData(prev => ({ ...prev, ...parsedProfile }));
      } catch (error) {
        console.error("Error parsing saved profile:", error);
      }
    }
  }, [user?.id]);

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleAddEducation = () => {
    const newEducation: EducationData = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      major: "",
      startYear: "",
      endYear: "",
      gpa: ""
    };
    setProfileData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
  };

  const handleUpdateEducation = (id: string, field: keyof EducationData, value: string) => {
    setProfileData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const handleRemoveEducation = (id: string) => {
    setProfileData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const handleAddWorkExperience = () => {
    const newWork: WorkExperienceData = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      isCurrentJob: false
    };
    setProfileData(prev => ({
      ...prev,
      workExperience: [...prev.workExperience, newWork]
    }));
  };

  const handleUpdateWorkExperience = (id: string, field: keyof WorkExperienceData, value: string | boolean) => {
    setProfileData(prev => ({
      ...prev,
      workExperience: prev.workExperience.map(work => 
        work.id === id ? { ...work, [field]: value } : work
      )
    }));
  };

  const handleRemoveWorkExperience = (id: string) => {
    setProfileData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter(work => work.id !== id)
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save to localStorage
      localStorage.setItem(`gocareer_profile_${user?.id}`, JSON.stringify(profileData));
      
      setIsEditing(false);
      alert("Profile berhasil disimpan!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Terjadi kesalahan saat menyimpan profile");
    } finally {
      setIsSaving(false);
    }
  };

  const tabs = [
    { id: "personal", label: "Data Pribadi", icon: "👤" },
    { id: "professional", label: "Data Profesional", icon: "💼" },
    { id: "education", label: "Pendidikan", icon: "🎓" },
    { id: "experience", label: "Pengalaman Kerja", icon: "🏢" },
    { id: "additional", label: "Informasi Tambahan", icon: "📄" }
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {profileData.firstName.charAt(0)}{profileData.lastName.charAt(0)}
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {profileData.firstName} {profileData.lastName}
                  </h1>
                  <p className="text-gray-600">{profileData.currentPosition || "Pencari Kerja"}</p>
                  <p className="text-sm text-gray-500">{profileData.email}</p>
                </div>
              </div>
              <div className="flex space-x-3">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Batal
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 transition-colors"
                    >
                      {isSaving ? "Menyimpan..." : "Simpan"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Personal Information Tab */}
              {activeTab === "personal" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Depan
                      </label>
                      <input
                        type="text"
                        value={profileData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Belakang
                      </label>
                      <input
                        type="text"
                        value={profileData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        disabled={!isEditing}
                        placeholder="081234567890"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal Lahir
                      </label>
                      <input
                        type="date"
                        value={profileData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Kelamin
                      </label>
                      <select
                        value={profileData.gender}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="male">Laki-laki</option>
                        <option value="female">Perempuan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat
                    </label>
                    <textarea
                      value={profileData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      disabled={!isEditing}
                      placeholder="Jalan, nomor rumah, RT/RW"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kota
                      </label>
                      <input
                        type="text"
                        value={profileData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        disabled={!isEditing}
                        placeholder="Jakarta"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Provinsi
                      </label>
                      <input
                        type="text"
                        value={profileData.province}
                        onChange={(e) => handleInputChange("province", e.target.value)}
                        disabled={!isEditing}
                        placeholder="DKI Jakarta"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kode Pos
                      </label>
                      <input
                        type="text"
                        value={profileData.postalCode}
                        onChange={(e) => handleInputChange("postalCode", e.target.value)}
                        disabled={!isEditing}
                        placeholder="12345"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Professional Information Tab */}
              {activeTab === "professional" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Posisi Saat Ini
                      </label>
                      <input
                        type="text"
                        value={profileData.currentPosition}
                        onChange={(e) => handleInputChange("currentPosition", e.target.value)}
                        disabled={!isEditing}
                        placeholder="Frontend Developer"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pengalaman Kerja
                      </label>
                      <select
                        value={profileData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      >
                        <option value="">Pilih Pengalaman</option>
                        <option value="fresh-graduate">Fresh Graduate</option>
                        <option value="1-2-years">1-2 Tahun</option>
                        <option value="3-5-years">3-5 Tahun</option>
                        <option value="5-10-years">5-10 Tahun</option>
                        <option value="10+-years">10+ Tahun</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ekspektasi Gaji
                    </label>
                    <input
                      type="text"
                      value={profileData.expectedSalary}
                      onChange={(e) => handleInputChange("expectedSalary", e.target.value)}
                      disabled={!isEditing}
                      placeholder="Rp 8.000.000 - Rp 12.000.000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Keahlian/Skills
                    </label>
                    {isEditing && (
                      <div className="flex mb-3">
                        <input
                          type="text"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          placeholder="Tambah skill baru"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
                        />
                        <button
                          onClick={handleAddSkill}
                          className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                        >
                          Tambah
                        </button>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                        >
                          {skill}
                          {isEditing && (
                            <button
                              onClick={() => handleRemoveSkill(skill)}
                              className="ml-2 text-blue-600 hover:text-blue-800"
                            >
                              ×
                            </button>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio/Ringkasan Profesional
                    </label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      disabled={!isEditing}
                      placeholder="Ceritakan tentang diri Anda, pengalaman, dan tujuan karir..."
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === "education" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">Riwayat Pendidikan</h3>
                    {isEditing && (
                      <button
                        onClick={handleAddEducation}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Tambah Pendidikan
                      </button>
                    )}
                  </div>

                  {profileData.education.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      Belum ada data pendidikan
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {profileData.education.map((edu) => (
                        <div key={edu.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Institusi
                              </label>
                              <input
                                type="text"
                                value={edu.institution}
                                onChange={(e) => handleUpdateEducation(edu.id, "institution", e.target.value)}
                                disabled={!isEditing}
                                placeholder="Universitas Indonesia"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Gelar
                              </label>
                              <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => handleUpdateEducation(edu.id, "degree", e.target.value)}
                                disabled={!isEditing}
                                placeholder="S1"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Jurusan
                              </label>
                              <input
                                type="text"
                                value={edu.major}
                                onChange={(e) => handleUpdateEducation(edu.id, "major", e.target.value)}
                                disabled={!isEditing}
                                placeholder="Teknik Informatika"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                IPK/GPA
                              </label>
                              <input
                                type="text"
                                value={edu.gpa}
                                onChange={(e) => handleUpdateEducation(edu.id, "gpa", e.target.value)}
                                disabled={!isEditing}
                                placeholder="3.75"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Tahun Mulai
                              </label>
                              <input
                                type="text"
                                value={edu.startYear}
                                onChange={(e) => handleUpdateEducation(edu.id, "startYear", e.target.value)}
                                disabled={!isEditing}
                                placeholder="2018"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Tahun Selesai
                              </label>
                              <input
                                type="text"
                                value={edu.endYear}
                                onChange={(e) => handleUpdateEducation(edu.id, "endYear", e.target.value)}
                                disabled={!isEditing}
                                placeholder="2022"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                              />
                            </div>
                          </div>
                          {isEditing && (
                            <div className="mt-4 flex justify-end">
                              <button
                                onClick={() => handleRemoveEducation(edu.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                Hapus
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Work Experience Tab */}
              {activeTab === "experience" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">Pengalaman Kerja</h3>
                    {isEditing && (
                      <button
                        onClick={handleAddWorkExperience}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Tambah Pengalaman
                      </button>
                    )}
                  </div>

                  {profileData.workExperience.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      Belum ada data pengalaman kerja
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {profileData.workExperience.map((work) => (
                        <div key={work.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Perusahaan
                              </label>
                              <input
                                type="text"
                                value={work.company}
                                onChange={(e) => handleUpdateWorkExperience(work.id, "company", e.target.value)}
                                disabled={!isEditing}
                                placeholder="PT. Technology Indonesia"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Posisi
                              </label>
                              <input
                                type="text"
                                value={work.position}
                                onChange={(e) => handleUpdateWorkExperience(work.id, "position", e.target.value)}
                                disabled={!isEditing}
                                placeholder="Frontend Developer"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Tanggal Mulai
                              </label>
                              <input
                                type="month"
                                value={work.startDate}
                                onChange={(e) => handleUpdateWorkExperience(work.id, "startDate", e.target.value)}
                                disabled={!isEditing}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Tanggal Selesai
                              </label>
                              <input
                                type="month"
                                value={work.endDate}
                                onChange={(e) => handleUpdateWorkExperience(work.id, "endDate", e.target.value)}
                                disabled={!isEditing || work.isCurrentJob}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                              />
                            </div>
                          </div>
                          
                          {isEditing && (
                            <div className="mt-4">
                              <label className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={work.isCurrentJob}
                                  onChange={(e) => handleUpdateWorkExperience(work.id, "isCurrentJob", e.target.checked)}
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-700">Saat ini bekerja di sini</span>
                              </label>
                            </div>
                          )}

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Deskripsi Pekerjaan
                            </label>
                            <textarea
                              value={work.description}
                              onChange={(e) => handleUpdateWorkExperience(work.id, "description", e.target.value)}
                              disabled={!isEditing}
                              placeholder="Jelaskan tanggung jawab dan pencapaian Anda..."
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                            />
                          </div>

                          {isEditing && (
                            <div className="mt-4 flex justify-end">
                              <button
                                onClick={() => handleRemoveWorkExperience(work.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                Hapus
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Additional Information Tab */}
              {activeTab === "additional" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        value={profileData.linkedinUrl}
                        onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
                        disabled={!isEditing}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Portfolio Website
                      </label>
                      <input
                        type="url"
                        value={profileData.portfolioUrl}
                        onChange={(e) => handleInputChange("portfolioUrl", e.target.value)}
                        disabled={!isEditing}
                        placeholder="https://yourportfolio.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Resume/CV URL
                      </label>
                      <input
                        type="url"
                        value={profileData.resumeUrl}
                        onChange={(e) => handleInputChange("resumeUrl", e.target.value)}
                        disabled={!isEditing}
                        placeholder="https://drive.google.com/file/d/your-resume"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>

                  {/* Profile Completion */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-blue-900 mb-2">
                      Kelengkapan Profile
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className={`w-4 h-4 rounded-full mr-2 ${profileData.firstName && profileData.lastName ? 'bg-green-400' : 'bg-gray-300'}`}></span>
                        Data Pribadi
                      </div>
                      <div className="flex items-center text-sm">
                        <span className={`w-4 h-4 rounded-full mr-2 ${profileData.currentPosition && profileData.bio ? 'bg-green-400' : 'bg-gray-300'}`}></span>
                        Data Profesional
                      </div>
                      <div className="flex items-center text-sm">
                        <span className={`w-4 h-4 rounded-full mr-2 ${profileData.education.length > 0 ? 'bg-green-400' : 'bg-gray-300'}`}></span>
                        Pendidikan
                      </div>
                      <div className="flex items-center text-sm">
                        <span className={`w-4 h-4 rounded-full mr-2 ${profileData.workExperience.length > 0 ? 'bg-green-400' : 'bg-gray-300'}`}></span>
                        Pengalaman Kerja
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}
