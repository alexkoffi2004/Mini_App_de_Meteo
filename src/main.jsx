import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home/Home'
import Historique from './Pages/Historique/Historique'
import {Provider} from 'react-redux'
import globalStore from './Store/store'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([ // pour informer le naviguateur que le contenue des composant doivent être affiché si c'est cliqué
  {
    path:"/", // la page d'accueil
    Component: App,
    children: [
      {
        index:true, 
        Component: Home
      },
      {
        path: "/Historique",
        Component: Historique
      },
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={globalStore}>
    <RouterProvider router={router} />
  </Provider>
)
