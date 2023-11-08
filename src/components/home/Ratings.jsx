import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

const Ratings = () => {
  return (
    <div>
      <h3 className="text-lg font-black mb-2">Was This Helpful?</h3>
      <div className="flex gap-[2px]">
        {[...Array(4).keys()].map((elm) => (
          <StarIcon key={elm} className="h-6 w-6 text-color-primary" />
        ))}

        <StarIconOutline className="h-6 w-6 text-color-primary" />
      </div>
    </div>
  );
};

export default Ratings;
