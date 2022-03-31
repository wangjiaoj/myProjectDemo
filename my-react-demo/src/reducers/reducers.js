const InitialState = {
    loggedIn: true
  };
function Reducer(state, action) {
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