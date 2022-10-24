
enum MovieColE {
  id = 'id',
  name = 'name',
  rating = 'rating',
  cast = 'cast',
  genre = 'genre',
  release = 'release',
}

enum StoreE {
  toast = "toast",
  user = "user",
}

enum PathE {
  Auth = "/auth",
  Home = "/",
  Logout = "/logout",
}
enum URLE {
  baseURL = "http://localhost:5000/api",
  userregister = "/user/register",
  userlogin = "/user/login",
  movies = "/movies",
}
export {MovieColE, PathE, StoreE, URLE };
