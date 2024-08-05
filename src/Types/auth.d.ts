interface UserDetailsResponse {
  userName: string;
  role: string;
  email: string;
}

interface SignUpResponse {
  done: boolean;
  error: string | null;
}
interface LoginResponse {
  access: string;
  done: boolean;
  success: boolean;
  refresh: string;
  userData: UserDetailsResponse;
  error: string | null;
}
interface ModalFormMessage {
  userName: string | null;
}
interface ModalFormResponse {
  done: boolean;
  message: ModalFormMessage;
  error: string | null;
}
interface UserPofileMessage {
  userName: string;
  email: string;
  gender: string;
  dateOfBirth: Date;
  nic: string;
  mobile: string;
  image: string | null;
}
interface IUserProfileDetailsResponse {
  done: boolean;
  message: UserPofileMessage;
  error: string | null;
}
interface IUserProfileDetailsPostResponse {
  done: boolean;
  message: string;
  success: boolean;
  error: string | null;
}
interface IUserProfileImageResponse {
  done: boolean;
  message: string;
  error: string | null;
}

