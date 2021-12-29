import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes/Routes';
import { Suspense } from "react";
import Loading from './components/Loading';



function App() {
  return (
    <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            ></Route>
          );
        })}
      </Routes>
      </BrowserRouter>
      </Suspense>
  );
}

export default App;
