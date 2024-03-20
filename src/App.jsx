import { Route, Routes } from "react-router-dom";

import PageLayout from "./layouts/page/PageLayout";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
