import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ErrorPage from "./pages/errorpage/ErrorPage";
// import { useAuthContext } from "./context/AuthContext";
function App() {
  // const ProtectedRoute = ({ children }) => {
  //   const { user } = useAuthContext()
  //   if (user === null) {
  //     return <Navigate to="/" />;
  //   }
  //   return children;
  // };


  return (
    <Routes>
      {/* <Route exact path="login" element={<Login />} /> */}
      <Route path="/" element={<Layout />}>
        <Route exact path="login" element={<Login />} />
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}


export default App;
