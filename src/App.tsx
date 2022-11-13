import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from './features/search/Search';
import Card from './Components/Card/Card';
import styles from './App.module.scss';

const router = createBrowserRouter([
  {
    path: "avia",
    element: <Search />,
  },
  {
    path: "avia/info",
    element: <Card />,
  },
]);

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
