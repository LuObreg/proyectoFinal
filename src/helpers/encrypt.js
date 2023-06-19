import bcrypt from "bcrypt";

export const generateHash = async (password) => {
  try {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password.toString(), saltRounds);
    return hash;
  } catch (error) {
    console.error('Error al generar el hash:', error);
    throw error;
  }
};

