import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createManyCars = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { carList } = req.body;
  const cars = await prisma.car.createMany({
    data: carList,
  });
  res.json(cars);
};
