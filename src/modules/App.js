import AppStyle from './style/App.module.css';
import Navbar from "./utils/Navbar";
import {Route, Routes} from "react-router-dom";
import WritePost from "./pages/WritePost";
import Posts from "./pages/Posts";
import {Provider} from "react-redux";
import store from "./store/Store";

function App() {
    return (
        <>
            <Provider store={store}>

            <Navbar/>
            <div className={AppStyle.App}>
                <Routes>
                    <Route path="/writePost" element={<WritePost/>} />
                    <Route path="/posts" element={<Posts/>} />
                </Routes>
            </div>

            </Provider>
        </>
    );
}

export default App;