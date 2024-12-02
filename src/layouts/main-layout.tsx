import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>
        <h1>My Website</h1>
      </header>
      <main style={{ minHeight: "50vh" }}>
        <Outlet />
      </main>
      <footer>© 2024 My Website</footer>
    </div>
  );
};

export default MainLayout;
