type User = { id: string; name: string };
// Imaginary database
export const users: User[] = [{ id: "1", name: "Alice" }];

export const db = {
  user: {
    findMany: async () => users,
    findById: async (id: string) => users.find((user) => user.id === id),
    create: async (data: { name: string }) => {
      const user = { id: String(users.length + 1), ...data };
      users.push(user);
      return user;
    },
  },
};
