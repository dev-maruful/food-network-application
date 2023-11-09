import facebook from "../../../public/images/social-media/facebook.png";
import linkedIn from "../../../public/images/social-media/linkedin.png";
import twitter from "../../../public/images/social-media/twitter.png";
import more from "../../../public/images/social-media/more.png";
import Image from "next/image";

const socialMediaIcons = [facebook, linkedIn, twitter, more];

const SocialMedia = () => {
  return (
    <div className="lg:py-[60px] flex flex-row lg:flex-col gap-6">
      {socialMediaIcons.map((icon, index) => (
        <Image
          alt="social-media"
          key={index}
          src={icon}
          height={500}
          width={500}
          className="w-7 h-7"
        />
      ))}
    </div>
  );
};

export default SocialMedia;
