"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const user_schema_1 = require("../schema/user.schema");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const router = express_1.default.Router();
/**
 * @openapi
 * /api/v1:
 *  get:
 *     tags:
 *     - User
 *     description: Return all users
 *     responses:
 *       200:
 *         description: App is up and running
 *
 *
 *  post:
 *      tags:
 *      - User
 *      summary: Register a user
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CreateUserResponse'
 *        409:
 *          description: Conflict
 *        400:
 *          description: Bad Request
 *
 * @openapi
 *  /api/v1/{userId}:
 *  put:
 *     tags:
 *     - User
 *     summary: Get a single user by the userId
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The id of the user
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 *
 *  delete:
 *     tags:
 *     - User
 *     summary: Delete a single user by the userId
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The id of the user
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *       400:
 *           description: Bad Request
 *       404:
 *           description: Not Found
 */
router
    .route("/")
    .get(users_1.getAllUsers)
    .post((0, validateResource_1.default)(user_schema_1.createUserSchema), users_1.createUser);
router.route("/:id").get(users_1.getUser).put(users_1.updateUser).delete(users_1.deleteUser);
exports.default = router;
