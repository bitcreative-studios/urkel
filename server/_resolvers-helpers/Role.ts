// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { RoleResolvers } from "../graphqlgen"

export const Role: RoleResolvers.Type = {
  ...RoleResolvers.defaultResolvers,

  project: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
  user: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
  roletype: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
}
