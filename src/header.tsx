import { Link } from "./custom-react-router-dom/link";
import { useRouter } from "./custom-react-router-dom/use-router";

const Header = () => {
  const { currentPath } = useRouter();

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Link to="/">
        <div
          style={{
            color: currentPath === "/" ? "red" : "black",
          }}
        >
          Home
        </div>
      </Link>
      <Link to="/about">
        <div
          style={{
            color: currentPath === "/about" ? "red" : "black",
          }}
        >
          About
        </div>
      </Link>
    </nav>
  );
};

export default Header;
