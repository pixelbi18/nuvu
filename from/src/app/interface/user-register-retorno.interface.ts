export interface UserRegisterRetornoInterface {
  valid?: boolean;
  message?: string;
  data?: Data;
  access_token?: Accesstoken;
}

interface Data {
  firt_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
  id?: number;
}

interface Accesstoken {
  type?: string;
  token?: string;
  refreshToken?: any;
}