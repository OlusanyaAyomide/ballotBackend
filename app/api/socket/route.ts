
// import type { Server as HTTPServer } from "http"
// import type { Socket as NetSocket } from "net"
// import type { NextApiRequest, NextApiResponse } from "next"
// import type { Server as IOServer } from "socket.io"
// import { Server } from "socket.io"

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }
// const PORT = 3000
// interface SocketServer extends HTTPServer {
//   io?: IOServer | undefined
// }

// interface SocketWithIO extends NetSocket {
//   server: SocketServer
// }

// interface NextApiResponseWithSocket extends NextApiResponse {
//   socket: SocketWithIO
// }


// export function GET(_req: NextApiRequest, res: NextApiResponseWithSocket) {
//   if (res.socket?.server?.io) {
//     res.status(200).json({ success: true, message: "Socket is already running", socket: `:${PORT + 1}` })
//     return
//   }

//   console.log("Starting Socket.IO server on port:", PORT + 1)

//   const io = res.socket.server.io || new Server({ path: "/api/socket", addTrailingSlash: false, cors: { origin: "*" } }).listen(PORT + 1)

//   io.on("connect", socket => {
//     const _socket = socket
//     console.log("socket connect", socket.id)
//     _socket.broadcast.emit("welcome", `Welcome ${_socket.id}`)
//     socket.on("disconnect", async () => {
//       console.log("socket disconnect")
//     })
//     socket.on("refresher",()=>{
//         console.log("Event triggered")
//     })
//   })
//   if(res.socket?.server){
//       res.socket.server.io = io
//   }

//   res.status(201).json({ success: true, message: "Socket is started", socket: `:${PORT + 1}` })
// }