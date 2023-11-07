import {
  Cog6ToothIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
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
                settings
              </span>
            </div>
            <ChevronUpIcon className="w-4 h-5 color-primary" />
          </div>

          <div className="space-y-5">
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Font size</p>
                <p className="color-primary text-xs font-medium">19</p>
              </div>
              <input type="range" min={0} max="100" value="50" />
            </div>
            <div className="w-full">
              <p className="text-sm font-medium mb-[10px]">Vitamin Type</p>
              <div className="bg-[#1010101A] p-2 rounded-md flex items-center justify-between">
                <p>All Vitamin</p>
                <ChevronDownIcon className="h-5 w-5" />
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-sm font-medium">Subtitle</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
