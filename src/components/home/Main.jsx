"use client";

import Image from "next/image";
import SocialMedia from "../shared/SocialMedia";
import Ratings from "./Ratings";
import Drawer from "./Drawer";
import { useState } from "react";

const Main = ({ currentFood }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col-reverse lg:flex-row">
      {/* social media */}
      <div className="lg:w-1/12 mt-6 lg:mt-0">
        <SocialMedia />
      </div>

      {/* <button onClick={() => setDrawerOpen(true)}>hello</button> */}

      {/* <Drawer open={drawerOpen} setOpen={setDrawerOpen}> */}
      {/* <NavListWithIcons /> */}
      {/* <div>hello</div> */}
      {/* </Drawer> */}

      <div className="space-y-11 w-full lg:w-11/12">
        {/* first section */}
        <section className="flex gap-11">
          <div className="flex flex-col lg:flex-row justify-between gap-8 w-full">
            <div className="space-y-7 lg:w-1/2">
              <h2 className="font-black text-4xl">
                Health Benefits Of {currentFood?.name}
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">
                    {currentFood?.paragraphs?.first_para?.title}
                  </h3>
                  <p className="leading-6">
                    {currentFood?.paragraphs?.first_para?.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">
                    {currentFood?.paragraphs?.second_para?.title}
                  </h3>
                  <p className="leading-6">
                    {currentFood?.paragraphs?.second_para?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                alt="food-image"
                src={currentFood?.images?.second_img}
                height={500}
                width={500}
                className="rounded-[10px] lg:rounded-[30px] lg:w-[520px] h-32 lg:h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* second section */}
        <section>
          <div>
            <h3 className="text-lg font-bold mb-4">
              {currentFood?.paragraphs?.third_para?.title}
            </h3>
            <p className="leading-6">
              {currentFood?.paragraphs?.third_para?.description}
            </p>
          </div>
        </section>

        {/* third section */}
        <section className="flex flex-col lg:flex-row items-center gap-11">
          <div className="lg:w-1/2">
            <Image
              alt="food-image"
              src={currentFood?.images?.third_img}
              height={500}
              width={500}
              className="rounded-[10px] lg:rounded-[30px] lg:w-[520px] h-32 lg:h-80 object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-lg font-bold mb-4">
              {currentFood?.paragraphs?.fourth_para?.title}
            </h3>
            <p className="leading-6">
              {currentFood?.paragraphs?.fourth_para?.description}
            </p>
          </div>
        </section>

        {/* Ratings */}
        <div className="mt-11 lg:mt-16">
          <Ratings />
        </div>
      </div>
    </div>
  );
};

export default Main;
