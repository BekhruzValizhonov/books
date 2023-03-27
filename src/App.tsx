import React from "react";
import { Routes, Route } from "react-router-dom";
import OutletPages from "./routers/OutletPages";
import routers from "./routers/router";
import Main from "./layouts/mainPage";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<OutletPages />}>
          <Route index element={<Main />} />
          {routers.map((rout) => (
            <Route key={rout.key} path={rout.link} element={rout.component} />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
