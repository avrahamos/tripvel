import { NextFunction, Request, Response } from "express";

export const updateSettings = async(req:Request, res:Response , next:NextFunction)=>{
    try {
        
    } catch (error) {
        console.error("can't update settings ", error);
        next();
    }
}

export const getSettings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    console.error("can't get settings ", error)
    next()
  }
};