import { Routes, Route, Navigate } from "react-router-dom";
import { RoutesEnum } from "./utils/constants/consts";
import routers from "./routers/router";
import Header from "./layouts/header";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        {routers.map((rout) => (
          <Route key={rout.key} path={rout.link} element={rout.component} />
        ))}
        <Route path="*" element={<Navigate to={RoutesEnum.Home} />} />
      </Routes>
    </>
  );
};

export default App;
