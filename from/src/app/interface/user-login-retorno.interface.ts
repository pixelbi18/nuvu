export interface UserLoginRetornoInterfaces {
    valid?: boolean;
    message?: string;
    data?: Data;
    access_token?: Accesstoken;
}

interface Accesstoken {
    type?: string;
    token?: string;
    refreshToken?: any;
}

interface Data {
    id?: number;
    firt_name?: string;
    last_name: string;
    email?: string;
    password?: string;
    created_at?: string;
    updated_at?: string;
}