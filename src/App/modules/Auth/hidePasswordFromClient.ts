/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function hidePassword(user: any) {
  const { password, ...userWithoutPassword } = user.toObject();
  return userWithoutPassword;
}
