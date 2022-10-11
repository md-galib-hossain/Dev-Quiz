import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Homeonly from "./Components/Homeonly/Homeonly";
import Main from "./Components/Layout/Main";
import Quizes from "./Components/Quizes/Quizes";
import Statistics from "./Components/Statistics/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },

        {
          path: "statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        { path: "blog", element: <Blog></Blog> },
        {
          path: "/quiz/:quizId",
          loader: ({ params }) =>
            fetch(
              ` https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            ),
          element: <Quizes></Quizes>,
        },
      ],
    },
    { path: "*", element: <h1> 404 This page can't found</h1> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
