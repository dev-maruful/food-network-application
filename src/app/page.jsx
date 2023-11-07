"use client";

import {
  Cog6ToothIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Home() {
  const [isSubtitleChecked, setIsSubtitleChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsSubtitleChecked(!isSubtitleChecked);
  };

  return (
    <div className="flex gap-4">
      {/* Tabs section */}
      <section className="w-1/6 h-full bg-white rounded-2xl p-4">tabs</section>

      {/* Main content section */}
      <section className="w-4/6 h-full bg-white rounded-2xl p-11">
        main content
      </section>

      {/* Settings section */}
      <section className="w-1/6 h-full bg-white rounded-2xl p-4">
        <div className="border border-[#1010101A] p-[10px] rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Cog6ToothIcon className="h-5 w-5 color-primary" />
              <span className="color-primary text-sm font-semibold">
                Settings
              </span>
            </div>
            <ChevronUpIcon className="w-4 h-5 color-primary" />
          </div>

          <div className="space-y-5">
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Paragraph font size</p>
                <p className="color-primary text-xs font-medium">19</p>
              </div>
              <input type="range" min={0} max="100" value="50" />
            </div>
            <div className="w-full">
              <p className="text-sm font-medium mb-[10px]">
                Choose Vitamin Type
              </p>
              <div className="bg-[#1010101A] p-2 rounded-md flex items-center justify-between">
                <p>All Vitamin</p>
                <ChevronDownIcon className="h-5 w-5" />
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-sm font-medium">Turn off Subtitle</p>
              <label className="flex cursor-pointer select-none items-center">
                <div
                  className={`relative border rounded-[10px] ${
                    isSubtitleChecked ? "border-none" : "border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSubtitleChecked}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                  />
                  <div
                    className={`block h-[18px] w-[34px] rounded-full ${
                      isSubtitleChecked ? "bg-color-primary" : "bg-transparent"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-[2px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-white transition ${
                      isSubtitleChecked ? "translate-x-full" : "bg-gray-400"
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
