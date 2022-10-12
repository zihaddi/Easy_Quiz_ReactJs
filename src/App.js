
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import QuizPage from './components/QuizPage/QuizPage';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main/Main';

function App() {
 // className="App"
  const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader:async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element:<Topics></Topics>
      },
      {
        path:'/topics',
        loader:async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element:<Topics></Topics>
      },
      {
        path:'/practise/:id',
        loader:async({params})=>
        {
           return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element:<QuizPage></QuizPage>
      },
      {
        path:'statistics',
        loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Statistics></Statistics>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  }
  ])
   
  return (
    <div >
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
