import { socials } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p className="cursor-pointer hover:text-white transition-colors">
            Пользовательское соглашение
          </p>
        </div>

        <div className="socials flex gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hover:opacity-80 transition-opacity"
            >
              <social.icon className="text-default-500" size={24} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center md:items-end">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ажеев Александр. Все права защищены.
          </p>
          <a
            href="https://github.com/azheevA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-current mt-1 hover:opacity-80 transition-opacity"
            title="Ghost Raven"
          >
            <span className="text-default-600">Сделано</span>
            <p className="font-medium text-blue-500 ">Ghost Raven</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
