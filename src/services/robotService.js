const API_URL = "http://localhost:3001";

export const getRobots = async () => {
  try {
    const response = await fetch(`${API_URL}/robots`);
    if (!response.ok) throw new Error("Error al obtener la lista de robots");

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};


export const getRobotById = async (id) => {
    try {
      const response = await fetch(`${API_URL}/robots/${id}`);
      if (!response.ok) throw new Error("Error al obtener el robot");
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };