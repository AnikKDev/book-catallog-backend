export type UserLoginData = {
  email: string;
  password: string;
};

export type UserSignupData = {
  name: string;
  email: string;
  password: string;
  role?: string;
  contactNo: string;
  address: string;
  profileImg: string;
};
