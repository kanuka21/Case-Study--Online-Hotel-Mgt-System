import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "./components/HomePage";
//import Reception from "./pages/Reception";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
//import Reservation from "./pages/Reservation";
//import InventoryList from "./pages/InventoryList";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { RoomProvider } from "./context";
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  
  
<RoomProvider>
   <BrowserRouter>


<App />  

    </BrowserRouter>
   </RoomProvider>, 
  
  
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();