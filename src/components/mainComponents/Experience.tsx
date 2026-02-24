import { Building2, Calendar, MapPin } from "lucide-react";
import { experiences } from "./../../constants/constants";

const Experience = () => {
  return (
    <div className="flex ml-6 sm:ml-0 flex-col gap-4">
      {/* Section Title */}
      <h1 className="text-[#7E7E7E] font-[font2] text-[11px] sm:text-[12px] uppercase">
        Experience
      </h1>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex font-[font1] flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 min-h-[150px] w-full max-w-full sm:max-w-[550px] rounded-2xl bg-[#121212] shadow-md"
        >
          {/* Company Logo */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={exp.image}
              alt={exp.company}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-2 sm:gap-3 min-w-0">
            {/* Title */}
            <h1 className="font-[font2] text-[14px] sm:text-[16px] truncate">
              {exp.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-2 sm:gap-4 text-[#7E7E7E] text-[11px] sm:text-[13px]">
              <div className="flex items-center gap-1 sm:gap-2">
                <Calendar size={15} />
                <span className="text-[12px] sm:text-[14px]">{exp.date}</span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <Building2 size={15} />
                <span className="text-[12px] sm:text-[14px]">
                  {exp.company}
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <MapPin size={15} />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#7E7E7E] text-[12px] sm:text-[16px] mt-1 sm:mt-3 w-full max-w-full sm:max-w-[400px]">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
