import {
  BriefcaseBusiness,
  Folder,
  GraduationCap,
  User,
  Mail,
  Medal,
} from "lucide-react";

const Fotter = () => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed lg:w-[840px] lg:-ml-[177px] w-full left-0 lg:left-auto flex backdrop-blur-[2px] items-start justify-center h-[75px] bottom-0 flex items-center justify-between px-4 lg:px-0">
      <div className="flex bg-[#1F1F1F]  items-center justify-center w-[260px] sm:w-[290px] h-[45px] rounded-4xl gap-5 sm:gap-6 ">
        <div className="relative group flex flex-col items-center">
          <User
            onClick={() => scrollToId("intro")}
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E7E7E] cursor-pointer "
          />
          <span
            className=" rounded-4xl font-[font1] absolute bottom-full mb-2 px-2 py-1 text-xs bg-[#272727] text-white 
    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 
    transition-all duration-200 ease-out whitespace-nowrap"
          >
            Intro
          </span>
        </div>
        <div className="relative group flex flex-col items-center">
          <Folder
            onClick={() => scrollToId("projects")}
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E7E7E] cursor-pointer "
          />
          <span
            className=" rounded-4xl font-[font1] absolute bottom-full mb-2 px-2 py-1 text-xs bg-[#272727] text-white 
    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 
    transition-all duration-200 ease-out whitespace-nowrap z-50 left-1/2 transform -translate-x-1/2"
          >
            Work
          </span>
        </div>
        <div className="relative group flex flex-col items-center">
          <BriefcaseBusiness
            onClick={() => scrollToId("experience")}
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E7E7E] cursor-pointer "
          />
          <span
            className=" rounded-4xl font-[font1] absolute bottom-full mb-2 px-2 py-1 text-xs bg-[#272727] text-white 
    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 
    transition-all duration-200 ease-out whitespace-nowrap z-50 left-1/2 transform -translate-x-1/2"
          >
            Experience
          </span>
        </div>

        <div className="relative group flex flex-col items-center">
          <GraduationCap
            onClick={() => scrollToId("education")}
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E7E7E] cursor-pointer "
          />
          <span
            className=" rounded-4xl font-[font1] absolute bottom-full mb-2 px-2 py-1 text-xs bg-[#272727] text-white 
    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 
    transition-all duration-200 ease-out whitespace-nowrap z-50 left-1/2 transform -translate-x-1/2"
          >
            Education
          </span>
        </div>
        <div className="relative group flex flex-col items-center">
          <Medal
            onClick={() => scrollToId("contact")}
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E7E7E] cursor-pointer "
          />
          <span
            className=" rounded-4xl font-[font1] absolute bottom-full mb-2 px-2 py-1 text-xs bg-[#272727] text-white 
    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 
    transition-all duration-200 ease-out whitespace-nowrap z-50 left-1/2 transform -translate-x-1/2"
          >
            Certificates
          </span>
        </div>
        <div className="relative group flex flex-col items-center">
          <Mail
            onClick={() => scrollToId("contact")}
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E7E7E] cursor-pointer "
          />
          <span
            className=" rounded-4xl font-[font1] absolute bottom-full mb-2 px-2 py-1 text-xs bg-[#272727] text-white 
    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 
    transition-all duration-200 ease-out whitespace-nowrap z-50 left-1/2 transform -translate-x-1/2"
          >
            Contact
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
