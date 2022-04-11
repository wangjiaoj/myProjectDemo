interface StateInterface {
    loggedIn: boolean;
  }
  const InitialState: StateInterface = {
    loggedIn: true
  };
 
  interface ActionInterface {
    type: string;
  }
  const Reducer = (state: StateInterface, action: ActionInterface) => {
    switch (action.type) {
      case 'LOG_IN':
        return {
          loggedIn: true
        };
      case 'LOG_OUT':
        return {
          loggedIn: false
        };
      default:
        return state;
    }
  };
export { Reducer, InitialState };