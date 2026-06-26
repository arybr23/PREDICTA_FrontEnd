import React from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[80%] p-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Top Left Card: Tomorrow's Forecast */}
          <div className="bg-white rounded-xl shadow-sm ps-6 flex flex-col justify-center">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              Tomorrow's forecast
            </p>
            <h1 className="text-6xl/[40px] font-bold text-slate-800 my-2">
              120
            </h1>
            <h4 className="text-lg/[20px] text-slate-600">Coffees</h4>
          </div>

          {/* Top Right Card: History Diagram Placeholder */}
          <div className="bg-white p-6 rounded-xl shadow-sm min-h-[150px] md:col-span-2">
            {/* History chart/diagram goes here */}
          </div>

          {/* Bottom Card: Materials Forecast (Spans both columns) */}
          <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-sm min-h-[150px]">
            {/* Materials forecast content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
}
