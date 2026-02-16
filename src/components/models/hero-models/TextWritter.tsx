import Typewriter from "typewriter-effect";
interface IProps {
  className?: string;
}
export function TextWritter({ className }: IProps) {
  return (
    <div className={className}>
      <Typewriter
        options={{
          strings: [
            "Приветствую!!!",
            "Рад вам на моей странице!!!",
            "Я фулcтек разработчик!",
            "Меня зовут Александр",
            "Приятно познакомиться!!!",
          ],
          autoStart: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}
