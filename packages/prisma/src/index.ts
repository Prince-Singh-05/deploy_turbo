import { PrismaClient } from "@prisma/client/";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

export const client = new PrismaClient({
  accelerateUrl: connectionString,
});
