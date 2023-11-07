import {
  HomeIcon,
  Squares2X2Icon,
  PaperAirplaneIcon,
  VideoCameraIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import Icon from "./Icon";

const Sidebar = () => {
  return (
    <aside className="w-20 h-screen flex flex-col justify-center items-center gap-9">
      <Icon
        icon={<HomeIcon />}
        iconExtraClassNames={"color-primary"}
        activeClass
        sidebarIcon
      />
      <Icon icon={<Squares2X2Icon />} sidebarIcon />
      <Icon icon={<PaperAirplaneIcon />} sidebarIcon />
      <Icon icon={<VideoCameraIcon />} sidebarIcon />
      <Icon icon={<ListBulletIcon />} sidebarIcon />
    </aside>
  );
};

export default Sidebar;
