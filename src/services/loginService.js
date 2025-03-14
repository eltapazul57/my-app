const API_URL = "http://localhost:3001";

export const login = async (login, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });

    const data = await response.json();

    if (!response.ok && data.message === "The provided credentials are incorrect.") {
      data.message = "Error de autenticación. Revise sus credenciales.";
    }

    return { success: response.ok, message: data.message };
  } catch (error) {
    return { success: false, message: "Error de conexión con el servidor" };
  }
};
