export interface UserInformation {
  userName: string;
  password: string;
  dob?: string;
}

export interface AuthState {
  isSignIn: boolean;
  setIsSignin: (input: boolean) => void;
}
