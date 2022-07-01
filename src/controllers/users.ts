import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const users = await prisma.user.findMany({
    include: { cars: true },
  });
  res.json(users);
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  res.json(user);
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username, password } = req.body;
  const user = await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });
  res.json(user);
};

export const createManyUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userList } = req.body;
  const users = await prisma.user.createMany({
    data: userList,
  });
  res.json(users);
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  const { username } = req.body;
  const updatedUser = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      username: username,
    },
  });
  res.json(updatedUser);
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  const deletedUser = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json(deletedUser);
};
