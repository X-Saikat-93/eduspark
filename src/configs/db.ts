import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { BaseEnvironment } from "./BaseEnvironment";
export const runtime = "edge";

const env = new BaseEnvironment();

const sql = neon(env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(sql);
