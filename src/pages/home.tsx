// import { Link } from "react-router-dom";

import { FC, ReactNode } from "react";
import { Link } from "../custom-react-router-dom/link";

const Home: FC = (): ReactNode => {
  return (
    <div>
      <Link to={"/about"}>To about page</Link>
    </div>
  );
};

export default Home;
