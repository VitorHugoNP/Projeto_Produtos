import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

import { validateSchema } from "./middlewares/validateSchema";

import { createUserSchema } from "./schemas/userSchema";

import "dotenv/config";

import { PrismaClient } from "./prisma/client";

import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not defined. Check your .env file.");
}

const adapter = new PrismaPg({ connectionString });

const prismaClient = new PrismaClient({ adapter });

const router = Router();

export default prismaClient;

router.post("/users", validateSchema(createUserSchema), new CreateUserController().handle);
export { router };