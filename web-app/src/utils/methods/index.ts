const customError = (error: any=null) => {
  return { status: 500, data: { message: "Failed", error: error } };
};
export { customError };
