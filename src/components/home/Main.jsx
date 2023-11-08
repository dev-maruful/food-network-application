import Image from "next/image";
import SocialMedia from "../shared/SocialMedia";

const Main = ({ currentFood }) => {
  console.log(currentFood);

  return (
    <div className="space-y-11">
      {/* first section */}
      <section className="flex gap-11">
        <div>
          <SocialMedia />
        </div>
        <div className="flex justify-between gap-8 w-full">
          <div className="space-y-7 w-1/2">
            <h2 className="font-black text-4xl">
              Health Benefits Of {currentFood?.name}
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4">
                  {currentFood?.paragraphs?.first_para?.title}
                </h3>
                {currentFood?.paragraphs?.first_para?.description}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">
                  {currentFood?.paragraphs?.second_para?.title}
                </h3>
                {currentFood?.paragraphs?.second_para?.description}
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              alt="food-image"
              src={currentFood?.images?.second_img}
              height={500}
              width={500}
              className="rounded-[30px] w-[520px] h-80 object-cover"
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
          {currentFood?.paragraphs?.third_para?.description}
        </div>
      </section>

      {/* third section */}
      <section className="flex items-center">
        <div className="w-1/2">
          <Image
            alt="food-image"
            src={currentFood?.images?.third_img}
            height={500}
            width={500}
            className="rounded-[30px] w-[520px] h-80 object-cover"
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-4">
            {currentFood?.paragraphs?.fourth_para?.title}
          </h3>
          {currentFood?.paragraphs?.fourth_para?.description}
        </div>
      </section>
    </div>
  );
};

export default Main;
