"use client";

import { useEffect, useState } from "react";
import Settings from "@/components/home/Settings";
import Tabs from "@/components/home/Tabs";
import Main from "@/components/home/Main";

export default function Home() {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [foodName, setFoodName] = useState("Orange");
  const [currentFood, setCurrentFood] = useState({});
  const [allFoods, setAllFoods] = useState([]);

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
    <div className="flex gap-4">
      {/* Tabs section */}
      <section className="w-1/6 h-full bg-white rounded-2xl p-4">
        <Tabs
          fruits={fruits}
          vegetables={vegetables}
          foodName={foodName}
          setFoodName={setFoodName}
        />
      </section>

      {/* Main content section */}
      <section className="w-4/6 h-full bg-white rounded-2xl p-11 mb-14">
        <Main currentFood={currentFood} />
      </section>

      {/* Settings section */}
      <Settings />
    </div>
  );
}
