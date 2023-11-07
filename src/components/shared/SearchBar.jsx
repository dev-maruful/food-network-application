"use server";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Icon from "./Icon";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="block w-96 rounded-md border-0 py-2 pl-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search Best Food"
      />
      <Icon
        icon={<MagnifyingGlassIcon />}
        iconExtraClassNames={"color-primary"}
        extraClassNames={"absolute right-1 top-1 z-10"}
        sidebarIcon={false}
        activeClass
      />
    </div>
  );
};

export default SearchBar;
