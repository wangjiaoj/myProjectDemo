const InitialState = {
    loggedIn: true
  };
  interface actionType{
      type:'string',
      user:any
  }
function Reducer(state:any, action:any) {
    switch (action.type) {
        case "setUser":
            return { ...state, user: action.user };
        case "setBooks":
            return { ...state, books: action.books };
        case "setMovies":
            return { ...state, movies: action.movies };
        default:
            throw new Error();
    }
}
export { Reducer, InitialState };