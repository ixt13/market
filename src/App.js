import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./screens/acticlePage/article";
import Main from "./screens/mainPage/main";
import ProfilePage from "./screens/profilePage/profilePage";
import SellerPage from "./screens/sellerPage/seller";

import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import ProtectedRoute from "./protectedRoute";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div style={{ minHeight: "100%", position: "relative", zIndex: "1" }}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/article" element={<Article />} />
            <Route
              path="/myProfile"
              element={
                <ProtectedRoute isUser={token}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/sellerProfile" element={<SellerPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
