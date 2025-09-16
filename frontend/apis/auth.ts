const API_URL = import.meta.env.VITE_API_URL as string


export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  // you can add more fields if backend returns them, e.g., userId
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
