var bcrypt = require("bcrypt");

export async function generateHash(password: string): Promise<string> {
  try {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    console.error('Error al generar el hash:', error);
    throw error;
  }
}
