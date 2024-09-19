import { defineConfig } from "drizzle-kit";
import { BaseEnvironment } from "@/configs/BaseEnvironment";

const env = new BaseEnvironment();

export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/schema/schema.ts",
  out: "./src/drizzle",
  dbCredentials: {
    url: env.DRIZZLE_DATABASE_URL,
  },
});
