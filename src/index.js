import App from "./components/App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(<App />);
