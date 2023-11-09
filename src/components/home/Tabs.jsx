import { useState } from "react";
import Icon from "../shared/Icon";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Tabs = ({ fruits, vegetables, foodName, setFoodName, setOpen }) => {
  const [isFruitsTab, setIsFruitsTab] = useState(true);

  const fruitsForTab = fruits.map((fruit) => {
    return {
      name: fruit.name,
      id: fruit.id,
      image: fruit.images.first_img,
      vitamins: fruit.vitamins,
    };
  });

  const vegetablesForTab = vegetables.map((vegetable) => {
    return {
      name: vegetable.name,
      id: vegetable.id,
      image: vegetable.images.first_img,
      vitamins: vegetable.vitamins,
    };
  });

  return (
    <div className="space-y-4">
      {/* toggle tab */}
      <div className="flex items-center w-full border-2 border-[#E6552726] p-1 rounded-lg">
        <div
          onClick={() => setIsFruitsTab(true)}
          className={`w-1/2 flex justify-center py-3 rounded-md text-sm font-semibold cursor-pointer ${
            isFruitsTab && "bg-[#E655271A] text-color-primary"
          }`}
        >
          Fruits
        </div>
        <div
          onClick={() => setIsFruitsTab(false)}
          className={`w-1/2 flex justify-center py-3 rounded-md text-sm font-semibold cursor-pointer ${
            !isFruitsTab && "bg-[#E655271A] text-color-primary"
          }`}
        >
          Vegetables
        </div>
      </div>

      {/* Search field */}
      <div className="relative">
        <input
          type="text"
          className={`w-full block rounded-md border-0 py-2 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          placeholder={
            isFruitsTab ? "Search fruits by name" : "Search vegetables"
          }
        />
        <Icon
          icon={<MagnifyingGlassIcon />}
          iconExtraClassNames={"text-color-primary"}
          extraClassNames={"absolute right-1 top-1 z-10"}
          sidebarIcon={false}
          activeClass
        />
      </div>

      {/* Food list */}
      <div>
        <p className="text-sm font-medium mb-3">
          {isFruitsTab ? "Fruits list" : "Vegetables list"}
        </p>
        <div>
          {isFruitsTab
            ? fruitsForTab.map((fruit) => (
                <div
                  onClick={() => {
                    setFoodName(fruit.name);
                    setOpen(false);
                  }}
                  key={fruit.id}
                  className={`p-2 rounded-lg flex items-center gap-4 cursor-pointer ${
                    foodName === fruit.name && "border-2 border-[#E55527]"
                  }`}
                >
                  {/* image */}
                  <div className="relative flex items-center p-2">
                    <Image
                      alt="fruit-image"
                      src={fruit.image}
                      height={400}
                      width={400}
                      className="w-12 h-12"
                    />
                    <div className="h-12 w-12 bg-[#FFA42847] rounded-xl transform rotate-45 absolute"></div>
                  </div>

                  {/* name and vitamins */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{fruit.name}</p>
                    <p className="text-xs text-[#101010B2]">
                      Vitamin {fruit.vitamins}
                    </p>
                  </div>
                </div>
              ))
            : vegetablesForTab.map((vegetable) => (
                <div
                  onClick={() => {
                    setFoodName(vegetable.name);
                    setOpen(false);
                  }}
                  key={vegetable.id}
                  className={`p-2 rounded-lg flex items-center gap-4 cursor-pointer ${
                    foodName === vegetable.name && "border-2 border-[#E55527]"
                  }`}
                >
                  {/* image */}
                  <div className="relative flex items-center p-2">
                    <Image
                      alt="vegetable-image"
                      src={vegetable.image}
                      height={400}
                      width={400}
                      className="w-12 h-12"
                    />
                    <div className="h-12 w-12 bg-[#DD4C4126] rounded-xl transform rotate-45 absolute"></div>
                  </div>

                  {/* name and vitamins */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{vegetable.name}</p>
                    <p className="text-xs text-[#101010B2]">
                      Vitamin {vegetable.vitamins}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
