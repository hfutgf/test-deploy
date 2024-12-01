import About from "./pages/about";
import Main from "./pages/home";
import { RouterProvider } from "./custom-react-router-dom/custom-react-router-dom";
import { Route } from "./custom-react-router-dom/route";
import Header from "./header";
// import ReactRouterDom from "./react-router-dom/react-router-dom";

const App = () => {
  return (
    <>
      {/* <ReactRouterDom /> */}

      <RouterProvider>
        <Header />
        <div>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </div>
      </RouterProvider>
    </>
  );
};

export default App;
