interface Project {
  title: string;
  description: string;
  exploreLink: string;
  githubLink: string;
}

const projects: Project[] = [
  { 
    title: "Flight Booking System", 
    description: "Preventing overbooking with Kafka & FastAPI", 
    exploreLink: "https://your-live-demo-link.com", 
    githubLink: "https://github.com/utkarshbhola/flight-booking-system" 
  },
  { 
    title: "AI Productivity Monitor", 
    description: "Detect distractions in study/work sessions", 
    exploreLink: "https://your-live-demo-link.com", 
    githubLink: "https://github.com/your-username/ai-productivity-monitor" 
  },
  { 
    title: "Intelligent Document Query", 
    description: "Query large PDFs using LLMs & FAISS", 
    exploreLink: "https://your-live-demo-link.com", 
    githubLink: "https://github.com/utkarshbhola/intelligent-document-query" 
  },
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      {projects.map((proj, index) => (
        <div key={index} className="pb-12">
          <h2 className="text-2xl font-bold mb-2">{proj.title}</h2>
          <p className="text-gray-600 mb-4">{proj.description}</p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href={proj.exploreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Explore
            </a>
            <a
              href={proj.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          </div>

          {/* Divider except after last project */}
          {index < projects.length - 1 && (
            <hr className="mt-12 border-t border-gray-300 w-screen relative left-[calc(-50vw+50%)]" />
          )}
        </div>
      ))}
    </div>
  );
}
