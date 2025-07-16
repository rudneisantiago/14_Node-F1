import fastify from "fastify";

const server = fastify({ logger: true });

const teams = [
  { id: 1, name: "Ferrari", base: "Maranello, Italy" },
  { id: 2, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 3, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 4, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
];

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);
  return teams;
});

server.get("/drivers", async (req, res) => {
  res.type("application/json").code(200);
  return drivers;
});

const port = Number(process.env.PORT);

server.listen({ port }, () => {
  console.log("Servidor iniciado na porta: " + port);
});
