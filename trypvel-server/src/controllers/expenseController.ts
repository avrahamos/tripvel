import { NextFunction, Request, Response } from "express";

export const addNewExpense = async(req:Request, res:Response , next:NextFunction)=>{
    try {
        
    } catch (error) {
        console.error("can't add new expense ", error);
        next();
    }
}

export const getExpenseData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    console.error("can't get data ", error)
    next()
  }
};

export const getAgrgregatedDashboard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    console.error("can't get dashboard ", error);
    next();
  }
};
export const updateExpense = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    console.error("can't update expense ", error);
    next();
  }
};
