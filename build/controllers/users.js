"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createManyUsers = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany({
        include: { cars: true },
    });
    res.json(users);
});
exports.getAllUsers = getAllUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield prisma.user.findUnique({
        where: { id: Number(id) },
    });
    res.json(user);
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield prisma.user.create({
        data: {
            username: username,
            password: password,
        },
    });
    res.json(user);
});
exports.createUser = createUser;
const createManyUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userList } = req.body;
    const users = yield prisma.user.createMany({
        data: userList,
    });
    res.json(users);
});
exports.createManyUsers = createManyUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { username } = req.body;
    const updatedUser = yield prisma.user.update({
        where: { id: Number(id) },
        data: {
            username: username,
        },
    });
    res.json(updatedUser);
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deletedUser = yield prisma.user.delete({
        where: { id: Number(id) },
    });
    res.json(deletedUser);
});
exports.deleteUser = deleteUser;
