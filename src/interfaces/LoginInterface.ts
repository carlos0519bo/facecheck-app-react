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

export interface FormTypeProps {
  formtype: 'login' | 'register';
}

export interface ChangePasswordProps {
  password: string;
  newPassword: string;
  repeatPassword: string;
}
