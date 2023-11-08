import Image from "next/image";
import errorImage from "../../../public/images/post/errorImage.png";

const More = () => {
  return (
    <div className="bg-white w-full h-full rounded-[10px] flex items-center justify-center">
      <div className="space-y-11 flex flex-col items-center">
        <Image
          src={errorImage}
          height={500}
          width={500}
          className="h-72 w-[526px]"
        />
        <h2 className="font-bold text-3xl">This Page Is Empty</h2>
      </div>
    </div>
  );
};

export default More;
