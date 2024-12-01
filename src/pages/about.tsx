// import { Link } from "react-router-dom";

import { FC, ReactNode } from "react";
import { Link } from "../custom-react-router-dom/link";

const About: FC = (): ReactNode => {
  return (
    <div>
      <Link to={"/"}>To main page</Link>
    </div>
  );
};

export default About;
