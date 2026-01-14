export interface RegisterFormData {
  email?: string;
  phoneNumber?: string;
  password: string;
  confirmPassword?: string;
  termsAccepted: boolean;
}

export type RegisterMethod = 'email' | 'mobile';

