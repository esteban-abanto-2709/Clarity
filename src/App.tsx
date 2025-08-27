import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Workspace from "./pages/Workspace";

// Componente de loading mientras se cargan las traducciones
function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-2xl font-light text-white animate-pulse">
        Cargando...
      </div>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/workspace" element={<Workspace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;