export interface AuthInterface {
    email : string;
    password : string; 
}

export interface AuthResponse {
    success: boolean,
    name: string,
    id: string
}