import { Router } from "express";

const adminRoutes = Router();

adminRoutes.get("/users", (req, response) => {
  const users = [
    { name: "Guilherme", nickname: "guifler" },
    { name: "Felipe", nickname: "pesga" },
  ];

  return response.send(users);
});

export { adminRoutes };
