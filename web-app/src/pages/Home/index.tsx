import React from "react";
import moment from "moment-mini";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import Table from "react-bootstrap/Table";
import { MovieColE } from "../../utils/constants";
import { MovieDialogPropsI, MoviesI } from "../../utils/interfaces";
import {
  addMovieAPI,
  deleteMovieAPI,
  fetchMoviesAPI,
  updateMovieAPI,
} from "../../networks/moviesAPI";
import editIcon from "../../assets/images/edit-icon.png";
import Button from "../../components/Button";
import MovieDialog from "./components/MovieDialog";
import { DialogTypeI } from "../../utils/interfaces/components.interface";
import { setToast } from "../../redux/reducers/toast.reducer";

const tableKeys: any[] = [
  {
    key: MovieColE.name,
    title: "Name",
  },
  {
    key: MovieColE.cast,
    title: "Cast",
  },
  {
    key: MovieColE.genre,
    title: "Genre",
  },
  {
    key: MovieColE.release,
    title: "Release",
  },
  {
    key: MovieColE.rating,
    title: "Rating",
  },
];
const Home = () => {
  const dispatch = useDispatch();
  const movieDialogRef = React.useRef<MovieDialogPropsI>(null);
  const { user } = useSelector((state: any) => state.user);
  const [movies, setMovies] = React.useState<MoviesI[]>([]);
  const [pagination, setPagination] = React.useState<any>({
    page: 0,
    limit: 20,
  });

  const fetchMovies = React.useCallback(async () => {
    const { status, data } = await fetchMoviesAPI({
      ...pagination,
      page: pagination.page + 1,
      user_id: user?.id,
    });
    if (status === 200 && data.movies.length) {
      setPagination((prev: any) => ({ ...prev, page: prev.page + 1 }));
      setMovies(
        data.movies.map((moviesItem: any) => ({
          ...moviesItem,
          cast: moviesItem.cast.join(","),
          release: moment(moviesItem.release).format("yyyy-MM-DD").toString(),
        }))
      );
    }
  }, [movies]);
  React.useEffect(() => {
    fetchMovies();
  }, []);
  const addMovie = React.useCallback(async () => {
    movieDialogRef.current?.toggle("Add");
  }, [movies]);
  const handleEdit = React.useCallback(
    (movie: MoviesI) => {
      movieDialogRef.current?.toggle("Edit", movie);
    },
    [movies]
  );
  const addEditMovie = React.useCallback(
    async (typeP: DialogTypeI, movieP: MoviesI) => {
      let status: any, data: any;
      if (typeP === "Add") {
        ({ status, data } = await addMovieAPI({ ...movieP, cast: movieP.cast.split(","), user_id: user.id }));
        if (status === 201) {
          setMovies((prev) => [...prev, { id: data.movie_id, ...movieP }]);
        }
      } else {
        ({ status, data } = await updateMovieAPI({
          ...movieP,
          cast: movieP.cast.split(","),
          user_id: user.id,
        }));
        if (status === 200) {
          setMovies((prev: MoviesI[]) =>
            prev.map((prevItem: MoviesI) =>
              prevItem.id === movieP.id ? movieP : prevItem
            )
          );
        }
      }
      if (status !== 201 && status !== 200) {
        dispatch(
          setToast({
            title: typeP,
            message: data.message,
          })
        );
      }
    },
    [movies]
  );
  const handleDelete = React.useCallback(
    async (id: number) => {
      const { status, data } = await deleteMovieAPI(id);
      if (status === 200) {
        setMovies((prev: MoviesI[]) =>
            prev.filter((prevItem: MoviesI) =>
              prevItem.id !== id
            )
          );
      } else {
        dispatch(
          setToast({
            title: 'Delete',
            message: data.message,
          })
        );
      }
    },
    [movies]
  );
  return (
    <div className={styles.background}>
      <MovieDialog addEditMovie={addEditMovie} ref={movieDialogRef} />
      <Button
        backgroundClassName={styles.buttonBackgroundClassName}
        text="Add"
        handleClick={addMovie}
      />
      <Table style={{ height: "5px" }} striped bordered hover>
        <thead>
          <tr>
            {React.Children.toArray(
              tableKeys.map((tableKeysItem) => (
                <th className={styles.th}>{tableKeysItem.title}</th>
              ))
            )}
            <th className={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {React.Children.toArray(
            movies.map((moviesItem: any) => (
              <tr>
                {React.Children.toArray(
                  tableKeys.map((tableKeysItem: any) => (
                    <td>{moviesItem?.[tableKeysItem.key]}</td>
                  ))
                )}
                <td className={styles.actions}>
                  <img
                    className={styles.edit}
                    src={editIcon}
                    alt="edit"
                    onClick={() => handleEdit(moviesItem)}
                  />
                  <div className={styles.delete} onClick={() => handleDelete(moviesItem.id)}>X</div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
