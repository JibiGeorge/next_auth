type registerInputType = {
  name?: String;
  email?: String;
  password?: String;
  password_confirmation?: String;
};

type loginInputType = {
  email?: String;
  password?: String;
};

type registerErrorType = {
  name?: String;
  email?: String;
  password?: String;
};

type loginErrorType = {
  errorMessage?: string;
  email?: String;
  password?: String;
};
