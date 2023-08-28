import {createRoot} from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux"
import {store} from "../src/store/index";
import "./input.css";


const el=createRoot(document.getElementById("root"));
el.render(
<Provider store={store}>
<App/>
</Provider>
)