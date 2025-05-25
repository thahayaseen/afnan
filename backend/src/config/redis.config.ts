import redis from "redis";
import { env } from "./env.config";
export const Rserver = redis.createClient({
  url: env.Redis_url,
});
