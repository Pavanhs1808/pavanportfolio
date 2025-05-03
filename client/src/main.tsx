import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add FontAwesome CDN for icons
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

// Add Google Fonts
const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap';
document.head.appendChild(googleFontsLink);

// Set page title
const titleElement = document.createElement('title');
titleElement.textContent = 'Pavan HS | Portfolio';
document.head.appendChild(titleElement);

createRoot(document.getElementById("root")!).render(<App />);
