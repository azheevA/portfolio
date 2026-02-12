import { logoIconsList } from "../constants";

interface ILogo {
  imgPath: string;
  name?: string;
}

interface IProps {
  icon: ILogo;
}

const LogoIcon = ({ icon }: IProps) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name || "logo"} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge left-0" />
    <div className="gradient-edge right-0" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {(logoIconsList as ILogo[]).map((icon, index) => (
          <LogoIcon key={`first-${index}`} icon={icon} />
        ))}
        {(logoIconsList as ILogo[]).map((icon, index) => (
          <LogoIcon key={`second-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
