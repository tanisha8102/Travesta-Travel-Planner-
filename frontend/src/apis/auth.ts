const API_URL = import.meta.env.VITE_API_URL as string;

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}


// Function to register a user
export const registerUser = async (data: RegisterData): Promise<RegisterResponse> => {
  try {
    const body = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
    };

    const res = await fetch(`${API_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || "Failed to register");

    return result;
  } catch (err: any) {
    throw new Error(err.message || "Something went wrong");
  }
};

// -----------------------------
// LOGIN FUNCTION
// -----------------------------

export interface LoginData { 
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  message?: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}


// Function to login a user
export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || "Failed to login");

    return result;
  } catch (err: any) {
    throw new Error(err.message || "Something went wrong");
  }
};
