import { useState } from "react";

interface ButtonProps {
  color: string;
  text: string;
  bgColor: string;
  hoverBgColor: string;
}

const Button = ({ color, text, bgColor, hoverBgColor }: ButtonProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <button
      type="button"
      style={{
        color: color,
        backgroundColor: isHover ? hoverBgColor : bgColor,
        transition: "background 200ms ease-in",
      }}
      className="w-full block m-auto font-md font-medium rounded-md py-3"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text}
    </button>
  );
};

export default Button;
