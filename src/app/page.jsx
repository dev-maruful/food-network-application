"use client";

import { useEffect, useState } from "react";
import Settings from "@/components/home/Settings";
import Tabs from "@/components/home/Tabs";
import Main from "@/components/home/Main";
import Drawer from "@/components/home/Drawer";
import {
  QueueListIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [foodName, setFoodName] = useState("Orange");
  const [currentFood, setCurrentFood] = useState({});
  const [allFoods, setAllFoods] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetch("fruits.json")
      .then((res) => res.json())
      .then((data) => setFruits(data));

    fetch("vegetables.json")
      .then((res) => res.json())
      .then((data) => setVegetables(data));
  }, []);

  useEffect(() => {
    setAllFoods([...fruits, ...vegetables]);
  }, [fruits, vegetables]);

  useEffect(() => {
    const currentFood = allFoods?.find((food) => food.name === foodName);
    setCurrentFood(currentFood);
  }, [foodName, allFoods]);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Tabs section */}
      <section className="lg:w-1/6 h-full bg-white rounded-2xl p-4 hidden lg:block">
        <Tabs
          fruits={fruits}
          vegetables={vegetables}
          foodName={foodName}
          setFoodName={setFoodName}
          setOpen={setDrawerOpen}
        />
      </section>

      {/* Drawer section */}
      <section onClick={() => setDrawerOpen(true)} className="lg:hidden">
        <div className="bg-white px-4 py-3 rounded-lg flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <QueueListIcon className="h-5 w-5 text-color-primary" />
            <p className="text-xs font-semibold">Select Food Item</p>
          </div>
          {drawerOpen ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
        </div>

        <Drawer open={drawerOpen} setOpen={setDrawerOpen}>
          <Tabs
            fruits={fruits}
            vegetables={vegetables}
            foodName={foodName}
            setFoodName={setFoodName}
            setOpen={setDrawerOpen}
          />
        </Drawer>
      </section>

      {/* Main content section */}
      <section className="lg:w-4/6 h-full bg-white rounded-lg lg:rounded-2xl p-4 lg:p-11 mb-14">
        <Main currentFood={currentFood} />
      </section>

      {/* Settings section */}
      <section className="lg:w-1/6 h-full hidden lg:block">
        <Settings />
      </section>
    </div>
  );
}
