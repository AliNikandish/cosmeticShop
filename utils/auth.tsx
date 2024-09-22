import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password:any) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (password:any, hashedPassword:any) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateAccessToken = (data:any) => {
  const token = sign({ ...data }, process.env.AccessTokenSecretKey!, {
    expiresIn: "7d",
  });
  return token;
};

const verifyAccessToken = (token:any) => {
  try {
    const tokenPayload = verify(token, process.env.AccessTokenSecretKey!);
    return tokenPayload;
  } catch (err) {
    console.log("Verify Access Token Error ->", err);
    return false;
  }
};

const generateRefreshToken = (data:any) => {
  const token = sign({ ...data }, process.env.RefreshTokenSecretKey!, {
    expiresIn: "15d",
  });
  return token;
};

const valiadteEmail = (email:any) => {
  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return pattern.test(email);
};

const valiadtePhone = (phone:any) => {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  return pattern.test(phone);
};

const valiadtePassword = (password:any) => {
  const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return pattern.test(password);
};

export {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
  valiadteEmail,
  valiadtePhone,
  valiadtePassword,
};
