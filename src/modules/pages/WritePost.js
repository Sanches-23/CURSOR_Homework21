// import AppStyle from "../style/App.module.css";
// import {Provider} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import {countSelector} from "../store/Selector";

function WritePost() {

    const count = useSelector(countSelector);
        const dispatch = useDispatch();
        const handlePlus = () => {
            const action = {
                type: "plus",
                payload: 2,
            }
            dispatch(action)
        }

        return (
        <>
            {/*<Provider>*/}
            <h2>WritePost</h2>
            <h3>AAA: {count}</h3>
            <div>
                <button  onClick={handlePlus}>+</button>
                {/*<button  onClick={handleReset}>Reset</button>*/}
                {/*<button  onClick={handleMinus}>-</button>*/}
            </div>



            {/*</Provider>*/}
        </>
    );
}

export default WritePost;