import { config } from "@/lib/authConfig";
import { prisma } from "@/lib/prisma";
import { compare } from "bcrypt";
import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

const handler = NextAuth(config)
export { handler as GET, handler as POST }