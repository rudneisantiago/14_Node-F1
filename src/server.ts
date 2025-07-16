import fastify from "fastify";

const server = fastify({ logger: true });

const teams = [
  { id: 1, name: "Ferrari", base: "Maranello, Italy" },
  { id: 2, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 3, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 4, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 7, name: "AlphaTauri", base: "Faenza, Italy" },
  { id: 8, name: "Williams", base: "Grove, United Kingdom" },
  { id: 9, name: "Alfa Romeo", base: "Hinwil, Switzerland" },
  { id: 10, name: "Haas", base: "Kannapolis, United States" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Sergio Pérez", team: "Red Bull Racing" },
  { id: 3, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 4, name: "George Russell", team: "Mercedes" },
  { id: 5, name: "Charles Leclerc", team: "Ferrari" },
  { id: 6, name: "Carlos Sainz", team: "Ferrari" },
  { id: 7, name: "Lando Norris", team: "McLaren" },
  { id: 8, name: "Oscar Piastri", team: "McLaren" },
  { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },
  { id: 11, name: "Esteban Ocon", team: "Alpine" },
  { id: 12, name: "Pierre Gasly", team: "Alpine" },
  { id: 13, name: "Valtteri Bottas", team: "Alfa Romeo" },
  { id: 14, name: "Zhou Guanyu", team: "Alfa Romeo" },
  { id: 15, name: "Kevin Magnussen", team: "Haas" },
  { id: 16, name: "Nico Hülkenberg", team: "Haas" },
  { id: 17, name: "Yuki Tsunoda", team: "AlphaTauri" },
  { id: 18, name: "Daniel Ricciardo", team: "AlphaTauri" },
  { id: 19, name: "Alexander Albon", team: "Williams" },
  { id: 20, name: "Logan Sargeant", team: "Williams" },
];

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);
  return teams;
});

server.get("/drivers", async (req, res) => {
  res.type("application/json").code(200);
  return drivers;
});

interface DriverParams {
  id: string;
}
server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const driver = drivers.find((driver) => driver.id === id);

  if (!driver) {
    res.type("application/json").code(404);
    return { message: "Driver not fount" };
  }

  res.type("application/json").code(200);
  return driver;
});

const port = Number(process.env.PORT);

server.listen({ port }, () => {
  console.log("Servidor iniciado na porta: " + port);
});
