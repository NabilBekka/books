import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./paths/Home";
import Search from "./paths/Search";
import ErrorPage from "./paths/ErrorPage";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Provider>
      
      <Footer />
    </div>
  );
}

export default App;
