import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const WS_PORT = (process.env.WS_PORT as unknown as number) || 3001;

const server = new WebSocketServer({
  port: WS_PORT,
});

server.on("connection", async (socket) => {
  await client.user.create({
    data: {
      username: `ws-${Math.random().toString()}`,
      password: Math.random().toString(),
    },
  });
  socket.send("Connected to the websocket server");
});
