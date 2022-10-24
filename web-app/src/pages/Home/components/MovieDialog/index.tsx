import moment from "moment-mini";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../../../../components/Button";
import TextField from "../../../../components/TextField";
import {
  MovieDialogPropsI,
  MovieDialogRefsI,
  MoviesI,
} from "../../../../utils/interfaces";
import { DialogTypeI } from "../../../../utils/interfaces/components.interface";

import styles from "./index.module.scss";
const MovieDialog: React.ForwardRefRenderFunction<
  MovieDialogPropsI,
  MovieDialogRefsI
> = ({ addEditMovie }, ref) => {
  const [show, setShow] = React.useState<boolean>(false);

  React.useImperativeHandle(ref, () => ({
    hide: () => {
      onHide();
    },
    toggle: (typeTemp: DialogTypeI, movieTemp?: MoviesI) => {
      if (typeTemp === "Edit") {
        setMovie(movieTemp);
      } else {
        setMovie({
          name: "",
          cast: "",
          rating: 0,
          genre: "",
          release: moment().format("yyyy-MM-DD").toString(),
        });
      }
      setType(typeTemp);
      setShow(true);
    },
  }));
  const [movie, setMovie] = React.useState<MoviesI>();
  const [type, setType] = React.useState<DialogTypeI>("Add");
  const handleChange = React.useCallback(
    (e: any) => {
      setMovie((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [movie]
  );
  const onHide = React.useCallback(() => {
    setShow(false);
  }, [show]);
  return (
    <Modal className={styles.background} show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{type} Movie</Modal.Title>
      </Modal.Header>

      {movie && (
        <Modal.Body>
          <TextField
            backgroundClassName={styles.inputField}
            label="Name"
            placeholder="Enter name..."
            name="name"
            type="text"
            value={movie.name}
            handleChange={handleChange}
          />
          <TextField
            backgroundClassName={styles.inputField}
            label="Cast"
            placeholder="Enter cast..."
            name="cast"
            type="text"
            value={movie.cast}
            handleChange={handleChange}
          />
          <TextField
            backgroundClassName={styles.inputField}
            label="Genre"
            placeholder="Enter genre..."
            name="genre"
            type="text"
            value={movie.genre}
            handleChange={handleChange}
          />
          <TextField
            backgroundClassName={styles.inputField}
            label="Rating"
            placeholder="Enter rating..."
            name="rating"
            type="number"
            value={movie.rating}
            handleChange={handleChange}
          />
          <TextField
            backgroundClassName={styles.inputField}
            label="Release"
            placeholder="Enter release..."
            name="release"
            type="date"
            value={movie.release}
            handleChange={handleChange}
          />
        </Modal.Body>
      )}

      <Modal.Footer>
        <Button
          backgroundClassName={styles.buttonBackgroundClassName}
          text={type === "Add" ? "Add" : "Edit"}
          handleClick={() => {
            onHide();
            addEditMovie(type, movie);
          }}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default React.forwardRef(MovieDialog);
