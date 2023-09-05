// import AppStyle from "../style/App.module.css";
// import {Provider} from "react-redux";
import {useSelector} from "react-redux";
import {countSelector} from "../store/Selector";

function WritePost() {

    const count = useSelector(countSelector);

        return (
        <>
                <h2>WritePost</h2>
            {/*<Provider>*/}
                <h3>AAA: {count}</h3>

            {/*</Provider>*/}
        </>
    );
}

export default WritePost;