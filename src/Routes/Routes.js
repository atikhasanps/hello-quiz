import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
    {
      path:'/',
      errorElement: <ErrorPage></ErrorPage>,
      element:<Main></Main>,
      children:[
        // {
        //     path:'/qui',
        //     loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz/${id}'),
            
        // },

        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>,
          
        },
        {
            path: '/topics',
            loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Topics></Topics>
          },
         
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ]
    }
  ])

  export default router