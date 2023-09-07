import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import CourseListPage from "./pages/CourseListPage";
import NotFoundPage from "./pages/NotFoundPage";
import EnquirePage from "./pages/EnquirePage";
import EnquireDetailsPage from "./pages/EnquireDetailsPage";
import ThankYouPage from "./pages/ThankYouPage";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CourseListPage />} />
        <Route path="/enquire/:id" element={<EnquirePage />} />
        <Route path="/enquire-detail" element={<EnquireDetailsPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
