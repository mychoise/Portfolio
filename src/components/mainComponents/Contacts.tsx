import React from "react";
import { contact } from "../../constants/constants";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  return (
    <div className="pb-40 ml-6 sm:ml-0 ">
      <h1 className="text-[#7E7E7E] font-[font2] text-[12px] uppercase">
        Contact
      </h1>
      <div className="flex flex-col mt-7">
        {contact.map((item, index) => (
          <Link
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            key={index}
            to={item.link}
            target="_blank"
            className="cursor-none"
          >
            <div className="transition-all w-[100%] sm:w-[88%]  duration-900">
              <div
                className={`group font-[font1]  hover:text-white transition-colors duration-600 w-full flex items-center justify-between ${
                  activeIndex === index ? "text-white" : "text-[#1a1919]"
                }`}
              >
                <h1 className={activeIndex === null ? "text-white" : ""}>
                  {item.value}
                </h1>
                <p
                  className={`${activeIndex === null ? "text-[#7E7E7E]" : "text-[#1a1919] group-hover:text-white"} transition-colors duration-300`}
                >
                  {item.name}
                </p>
              </div>
              {index < contact.length - 1 && (
                <hr
                  className={`w-full my-2 ${activeIndex === null ? "border-[#1a1a1a]" : activeIndex === index ? "border-[#141414]" : "border-[#141414]"}`}
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
