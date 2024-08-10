import bcrypt from "bcrypt";

/* Steps for creating password-
  1. Generate the salt
  2. Encrypt the password with the salt.
*/

export const GenerateSalt = async () => {
  return await bcrypt.genSalt();
};

export const GeneratePassword = async (password: string, salt: string) => {
  return await bcrypt.hash(password, salt);
};
