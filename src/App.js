import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./redux/actions/userAction";
import { fetchProductStart } from "./redux/actions/productAction";
import Home from "./pages/home";
import PageRender from "./utils/PageRender";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductStart());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:page" element={<PageRender />} />
        <Route path="/:page/:id" element={<PageRender />} />
      </Routes>
    </Router>
  );
};

export default App;
