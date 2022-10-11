import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";


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
        {
            path: 'quizTopic/:id',
            element:<Quiz></Quiz>,
            loader: ({params}) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }
      ]
    }
  ])

  export default router