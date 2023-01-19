interface MyStateType {
    user: string|null,
    chainId:  string|null,
    chainName:  string|null,
}
const InitialState = {
    user: null,
    chainId: null,
    chainName: null,

  };
function Reducer(state: MyStateType, action: { 
    type?: string; 
    user?: any; 
    chainId?: any; 
    chainName?: any; 
}) {
    switch (action.type) {
        case "setUser":
            return { ...state, user: action.user };
        case "setChainId":
            return { ...state, chainId: action.chainId };
        case "setChainName":
            return { ...state, chainName: action.chainName };
        default:
            throw new Error();
    }
}
export { Reducer, InitialState };