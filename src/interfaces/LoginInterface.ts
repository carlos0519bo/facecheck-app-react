export interface LoginProps {
  email: string;
  password: string;
  register: RegisterProps;
}

interface RegisterProps {
  name: string;
  lastName: string;
  repeatPassword: string;
}
