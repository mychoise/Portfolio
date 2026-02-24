import React from "react";
import Sidebar from "./main/Sidebar";
import Hero from "./main/Hero";
import Fotter from "./components/Fotter";

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar: fixed on desktop, centered on top for mobile/tablet */}
      <div className="w-full lg:w-[400px] lg:h-screen lg:fixed lg:top-0 lg:left-0 lg:overflow-y-auto flex justify-center lg:block">
        <Sidebar />
      </div>

      {/* Main content */}
      <main className="flex-1 -mt-[75px] sm:-mt-[0px] lg:ml-[400px] flex flex-col items-center lg:items-start">
        <Hero />
      </main>

      {/* Footer: centered on mobile/tablet, offset on desktop */}
      <div className="fixed bottom-0 w-full lg:w-auto lg:ml-[400px] lg:pl-44 flex justify-center lg:block">
        <Fotter />
      </div>
    </div>
  );
};
export default App;
