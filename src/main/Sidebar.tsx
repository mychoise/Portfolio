import { contact, Languages, skills } from "../constants/constants.ts";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-[360px] xl:w-[400px] lg:h-screen lg:overflow-y-auto lg:fixed lg:top-0 lg:left-0 lg:z-40 px-6 lg:px-8 pt-10 pb-10 flex flex-col items-start text-left">
      {/* Profile */}
      <div className="flex flex-col items-start">
        <img
          className="w-[64px] h-[64px] sm:w-[70px] sm:h-[70px] rounded-full"
          src="/profile.jpg"
          alt="profile"
        />

        <div className="mt-4 flex gap-2 items-center">
          <h1 className="font-[font1] text-xl sm:text-2xl">Sabin Dhakal</h1>
          <img
            src="/tick.png"
            className="h-5 w-5 sm:h-6 sm:w-6"
            alt="verified"
          />
        </div>

        <p className="font-[font2] text-[13px] sm:text-[14px] text-[#7E7E7E]">
          he/him
        </p>
      </div>

      {/* About */}
      <div className="mt-6 flex flex-col gap-2 items-start">
        <h1 className="text-[#7E7E7E] font-[font2] text-[11px] sm:text-[12px] uppercase">
          About
        </h1>

        <p className="font-[font2] text-[13px] sm:text-[14px] lg:text-[15px] max-w-[320px]">
          Pokhara based full-stack software engineer with 1+ years of experience
          in building web applications.
        </p>
      </div>

      {/* Contact */}
      <div className="mt-6 flex flex-col gap-2 items-start w-full">
        <h1 className="text-[#7E7E7E] font-[font2] text-[11px] sm:text-[12px] uppercase">
          Contact
        </h1>

        <div className="flex flex-col gap-2">
          {contact.slice(0, 3).map((item, index) => (
            <div className="flex gap-3 items-center" key={index}>
              <span className="w-5 flex items-center justify-center text-[#7E7E7E] shrink-0">
                <item.icon className="h-[17px] w-[17px]" />
              </span>
              <h1 className="font-[font2] text-white text-[13px] sm:text-[14px]">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-6 flex flex-col gap-2 items-start w-full">
        <h1 className="text-[#7E7E7E] font-[font2] text-[11px] sm:text-[12px] uppercase">
          Skills
        </h1>

        <div className="flex flex-wrap gap-2">
          {skills.map((item, index) => (
            <div
              key={index}
              className="border border-gray-400/10 px-2 sm:px-3 py-[1px] rounded-full"
            >
              <span className="font-[font2] text-white text-[13px] sm:text-[14px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mt-6 flex flex-col gap-2 items-start w-full">
        <h1 className="text-[#7E7E7E] font-[font2] text-[11px] sm:text-[12px] uppercase">
          Language
        </h1>

        <div className="flex flex-wrap gap-3">
          {Languages.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border border-gray-400/10 px-2 py-1 rounded-full"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={item.flag}
                  alt="flag"
                />
              </div>

              <span className="font-[font2] text-white text-[13px] sm:text-[14px]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Social */}
      <div className="mt-6 flex flex-col gap-2 items-start pb-10">
        <h1 className="text-[#7E7E7E] font-[font2] text-[11px] sm:text-[12px] uppercase">
          Social
        </h1>

        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sabin-dhakal-a10518300/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4 0 4.75 2.63 4.75 6.05V23h-4v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V23h-4V8z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mychoise/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M12 .297a12 12 0 0 0-3.79 23.4c.6.113.82-.258.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.932 0-1.311.469-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.768.84 1.233 1.91 1.233 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.814 1.102.814 2.222v3.293c0 .321.218.694.825.576A12.001 12.001 0 0 0 12 .297z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
