import { GET_ALL_MF, SET_MF_SEARCH_RESULTS, SET_SEARCH_TERM } from "../constants/mfConstants"

const initState = {
    allMutualFunds: [],
    fiveMutualFunds: [],
    searchTerm: [],
    searchResults: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_MF:
            return {
                ...state,
                allMutualFunds: action.data.allMutualFunds,
                fiveMutualFunds: action.data.fiveMutualFunds,
            };
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.term
            }
        case SET_MF_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.results
            }
        default:
            return state;
    }
}

export default reducer;