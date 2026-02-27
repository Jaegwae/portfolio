import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

// Vite 기본 엔트리 포인트.
// index.html의 #root 요소를 React 루트로 연결한다.
createRoot(document.getElementById("root")).render(<App />);
