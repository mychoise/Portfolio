import { Calendar, Folder, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { projects } from "../../constants/constants";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(500);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerW = containerRef.current.offsetWidth;
        setCardWidth(Math.min(containerW, 500));
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const gap = 24;

  const next = () => {
    if (index < projects.length - 1) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  const CardInfo = ({ project }: { project: (typeof projects)[0] }) => (
    <div className="flex gap-3 sm:gap-4 py-3 sm:py-4">
      {/* Logo */}
      <div className="ml-3 sm:ml-4 shrink-0">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={project.image}
            alt={project.name}
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1 min-w-0 pr-3 sm:pr-4">
        <h1 className="font-[font1] text-[13px] sm:text-[14px] lg:text-[15px] truncate">
          {project.name}
        </h1>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#7E7E7E]">
          <div className="flex items-center gap-1">
            <Calendar size={13} />
            <span className="font-[font1] text-[10px] sm:text-[11px] lg:text-[12px]">
              {project.date}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <User size={13} />
            <span className="font-[font1] text-[10px] sm:text-[11px] lg:text-[12px]">
              {project.role}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Folder size={13} />
            <span className="font-[font1] text-[10px] sm:text-[11px] lg:text-[12px]">
              {project.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-[#7E7E7E] ml-6 sm:ml-0 font-[font2] uppercase text-[11px] sm:text-[12px]">
        Projects
      </h1>

      {/* MOBILE & TABLET */}
      <div className="flex flex-col gap-4 mt-5 lg:hidden">
        {(showAllProjects ? projects : projects.slice(0, 2)).map(
          (project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="border ml-6 border-[#1e1e1e] rounded-2xl bg-[#121212] w-[90%] overflow-hidden hover:border-[#2a2a2a] transition">
                <CardInfo project={project} />
              </div>
            </a>
          ),
        )}

        {projects.length > 2 && (
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="mt-2 self-center px-5 py-3 w-[50%] ml-6 sm:ml-0 bg-[#1F1F1F] hover:bg-[#2A2A2A] text-white rounded-xl transition font-[font2] text-[12px] sm:text-[13px] uppercase"
          >
            {showAllProjects ? "Show Less" : `See All Projects`}
          </button>
        )}
      </div>

      {/* DESKTOP SLIDER */}
      <div
        ref={containerRef}
        className="hidden lg:block relative mt-6 cursor-none overflow-hidden w-full max-w-[620px]"
      >
        <div
          className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * (cardWidth + gap)}px)` }}
        >
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-none"
            >
              <div
                className="flex-shrink-0 border border-[#121212] rounded-2xl bg-[#121212] flex flex-col hover:border-[#2a2a2a] transition"
                style={{ width: `${cardWidth}px` }}
              >
                <div
                  className="w-full h-[250px] rounded-t-2xl"
                  style={{ backgroundColor: project.color }}
                />
                <CardInfo project={project} />
              </div>
            </a>
          ))}
        </div>

        <div
          onClick={prev}
          className="absolute left-0 top-0 h-full w-[120px] z-20 cursor-none"
        />
        <div
          onClick={next}
          className="absolute right-0 top-0 h-full w-[120px] z-20 cursor-none"
        />
      </div>

      {/* SLIDER DOTS */}
      {projects.length > 1 && (
        <div className="hidden lg:flex gap-2 mt-4">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-[#7E7E7E]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
