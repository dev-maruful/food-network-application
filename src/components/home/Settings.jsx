import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Settings = () => {
  const [isSubtitleChecked, setIsSubtitleChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsSubtitleChecked(!isSubtitleChecked);
  };

  return (
    <section className="w-full h-full bg-white rounded-2xl p-4">
      <div className="border border-[#1010101A] p-2 rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Cog6ToothIcon className="h-5 w-5 text-color-primary" />
            <span className="text-color-primary text-sm font-semibold">
              Settings
            </span>
          </div>
          <ChevronUpIcon className="w-4 h-5 text-color-primary" />
        </div>

        <div className="space-y-5">
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Paragraph font size</p>
              <p className="text-color-primary text-xs font-medium">19</p>
            </div>
            <input type="range" min={0} max="100" value="50" />
          </div>
          <div className="w-full">
            <p className="text-sm font-medium mb-2">Choose Vitamin Type</p>
            <div className="bg-[#1010101A] p-2 rounded-md flex items-center justify-between">
              <p>All Vitamin</p>
              <ChevronDownIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-sm font-medium">Turn off Subtitle</p>
            <label className="flex cursor-pointer select-none items-center">
              <div
                className={`relative border rounded-lg ${
                  isSubtitleChecked
                    ? "border-none bg-color-primary"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSubtitleChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
                <div
                  className={`block h-4 w-9 rounded-full ${
                    isSubtitleChecked ? "text-color-primary" : "bg-transparent"
                  }`}
                ></div>
                <div
                  className={`absolute left-[1px] top-0 flex h-4 w-4 items-center justify-center rounded-full transition ${
                    isSubtitleChecked
                      ? "translate-x-full bg-white"
                      : "bg-gray-400"
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
