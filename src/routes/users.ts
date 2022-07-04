import express from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users";
import { createUserSchema } from "../schema/user.schema";
import validateResource from "../middleware/validateResource";

const router = express.Router();

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
  .get(getAllUsers)
  .post(validateResource(createUserSchema), createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
