import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import CursorLight from "./components/CursorLight";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <CursorLight />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
