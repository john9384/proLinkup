function hasError(error_obj) {
  if (error_obj) {
    const err = {
      field: error_obj.field,
      detail: error_obj.detail
    };
    return err;
  } else {
    return false;
  }
}

export default hasError;
