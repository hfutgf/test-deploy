import { ReactNode } from "react";
import { useRouter } from "./use-router";

interface LinkProps {
  to: string;
  children: ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, children }) => {
  const { navigate } = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
