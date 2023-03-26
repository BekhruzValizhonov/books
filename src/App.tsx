import { Routes, Route } from "react-router-dom";
import OutletPages from "./routers/OutletPages";
import routers from "./routers/router";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<OutletPages />}>
          {routers.map((rout) => (
            <Route key={rout.key} path={rout.link} element={rout.component} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default App;
