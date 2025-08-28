interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
          <p className="text-blue-600 font-medium">{job.company}</p>
        </div>
        <div className="text-right">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            {job.type}
          </span>
        </div>
      </div>

      {/* Location and Salary */}
      <div className="mb-4">
        <div className="flex items-center text-gray-600 mb-1">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {job.location}
        </div>
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
          {job.salary}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

      {/* Requirements */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((req, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md"
            >
              {req}
            </span>
          ))}
          {job.requirements.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{job.requirements.length - 3} lainnya
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">{job.postedDate}</span>
        <div className="flex space-x-2">
          <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
            Lihat Detail
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
            Lamar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
