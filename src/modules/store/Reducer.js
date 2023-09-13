const initState = {
    loading: false,
    count: 0,
    user: {
        name: "AAA",
        age: 23,
    },
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'plus': {
            return {...state, count: state.count + action.payload};
        }
        case 'minus': {
            return {...state, count: state.count + 1};
        }
        case 'reset': {
            // return {...initState, count: initState.count};
            return {...state, count: 0};
        }
        default:
            return state;
    }
}