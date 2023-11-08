const Icon = ({
  icon,
  extraClassNames,
  iconExtraClassNames,
  sidebarIcon,
  activeClass,
}) => {
  return (
    <div>
      <div
        className={`${sidebarIcon ? "w-9 h-9" : "w-8 h-8"} ${
          activeClass
            ? "border-4 border-[#E655271A] bg-[#E655271A] text-color-primary"
            : "bg-[#1010101A]"
        } flex items-center justify-center rounded-md cursor-pointer z-10 ${extraClassNames}`}
      >
        <div className={`stroke-2 font-bold h-5 w-5 ${iconExtraClassNames}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Icon;
