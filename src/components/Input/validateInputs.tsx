export const validateInputs = (username: string, password: string): boolean => {
  if (!username || !password) {
    return false; 
  }
  if (password.length < 6) {
    return false;
  }
  if (username.length < 6 || username.length > 18){
    return false
  }
  return true;
};