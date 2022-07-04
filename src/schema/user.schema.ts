import { object, string } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *          - username
 *          - password
 *      properties:
 *          username:
 *            type: string
 *          password:
 *            type: string
 * 
 *    CreateUserInput:
 *      type: object
 *      required:
 *          - username
 *          - password
 *      properties:
 *          username:
 *            type: string
 *            default: adam1999
 *          password:
 *            type: string
 *            default: something
 *    CreateUserResponse:
 *      type: object
 *      properties: 
 *          username:
 *            type: string 
 *          password:
 *            type: string
 */
  
export const createUserSchema = object({
    body: object({
        username: string({
            required_error: "Username is required"
        }),
        password: string({
            required_error: "Password is required"
        }).min(6, "Password too short - should be 6 chars minimum")
    })
})