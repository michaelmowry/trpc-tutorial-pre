import React from "react";
import { router } from "@trpc/server";
import superjson from "superjson";
import { Context } from "./createContext";

export function createRouter() {
  // TODO: add context
  return router<Context>().transformer(superjson);
}
