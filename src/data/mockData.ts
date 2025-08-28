// Mock data centralized untuk seluruh aplikasi
export const mockJobs = [
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
    company: "DataTech Solutions",
    location: "Bandung",
    salary: "Rp 9.000.000 - 14.000.000",
    type: "Full-time",
    description: "Backend developer untuk mengembangkan API dan sistem database",
    requirements: ["Node.js", "PostgreSQL", "Docker"],
    postedDate: "1 hari yang lalu"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Jakarta",
    salary: "Rp 7.000.000 - 11.000.000",
    type: "Full-time",
    description: "Designer untuk menciptakan pengalaman pengguna yang menarik",
    requirements: ["Figma", "Adobe Creative Suite", "User Research"],
    postedDate: "3 hari yang lalu"
  }
];

export const mockCompanies = [
  {
    id: 1,
    name: "TechCorp Indonesia",
    logo: "https://via.placeholder.com/80x80?text=TC",
    industry: "Teknologi Informasi",
    location: "Jakarta",
    employees: "201-500",
    jobCount: 15
  },
  {
    id: 2,
    name: "DataTech Solutions",
    logo: "https://via.placeholder.com/80x80?text=DS",
    industry: "Data Analytics",
    location: "Bandung",
    employees: "51-200",
    jobCount: 8
  },
  {
    id: 3,
    name: "Creative Studio",
    logo: "https://via.placeholder.com/80x80?text=CS",
    industry: "Digital Marketing",
    location: "Jakarta",
    employees: "11-50",
    jobCount: 5
  }
];

export const getJobById = (id: number) => mockJobs.find(job => job.id === id);
export const getCompanyById = (id: number) => mockCompanies.find(company => company.id === id);
