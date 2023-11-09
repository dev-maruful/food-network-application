import Image from "next/image";
import errorImage from "../../../public/images/post/errorImage.png";

const More = () => {
  return (
    <div className="bg-white w-full h-screen lg:h-full rounded-lg flex items-center justify-center">
      <div className="space-y-6 lg:space-y-11 flex flex-col items-center py-4 lg:py-0">
        <Image
          alt="error-image"
          src={errorImage}
          height={500}
          width={500}
          className="lg:h-72 lg:w-[526px]"
        />
        <h2 className="font-bold text-3xl">This Page Is Empty</h2>
      </div>
    </div>
  );
};

export default More;
