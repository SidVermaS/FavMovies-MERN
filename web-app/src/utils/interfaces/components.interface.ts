import { ChangeEventHandler } from "react";
import { MoviesI } from "./movies.interface";

interface TextFieldI {
  backgroundClassName?: any;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  value: string | number | any;
}
interface ButtonI {
  handleClick: any;
  text: string;
  backgroundClassName?: any;
}
interface MovieDialogI extends MoviesI {
  type: "Add" | "Edit";
}

interface ToastI {
  title?: string;
  message?: string;
}

type DialogTypeI = "Add" | "Edit";
interface MovieDialogPropsI {
  hide: Function;
  toggle: Function;
}
interface MovieDialogRefsI {
  addEditMovie: Function;
}
export type {
  DialogTypeI,
  MovieDialogI,
  MovieDialogPropsI,
  MovieDialogRefsI,
  ToastI,
  ButtonI,
  TextFieldI,
};
