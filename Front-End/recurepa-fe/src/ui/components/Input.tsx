import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  placeholder?: string;
  children: ReactNode;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  placeholder = "Digite seu e-mail",
  children,
  className,
  type = "text",
  value,
  onChange,
}: Props) => {
  return (
    <div
      className={clsx(
        "flex w-[454px] items-center justify-center drop-shadow-lg",
        className
      )}
    >
      <span className="flex h-[50px] items-center rounded-l-lg bg-[#235347] px-5">
        {children}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-[50px] w-[454px] rounded-r-lg bg-[#C0D0C3] pl-3 text-[#235347] placeholder-[#235347] text-sm focus:outline-none"
      />
    </div>
  );
};
