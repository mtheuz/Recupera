import clsx from "clsx";

interface Props {
  name?: string;
  className?: string;
  type?: "submit" | "reset" | "button";
}

export const Button = ({ name, className, type = "submit" }: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        "flex items-center justify-center bg-[#235347] w-[454px] h-[50px]  rounded-lg text-white hover:scale-105 duration-300 cursor-pointer",
        className
      )}
    >
      {name}
    </button>
  );
};
