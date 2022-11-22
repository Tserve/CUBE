import agreedServer from "@agreed/server"

const { app, createServer } = agreedServer({
  path: "spec/api/agreed.ts",
  port: 4001,
  logging: true,
  defaultResponseHeaders: {
    'access-control-allow-origin': '*'
  },
})

createServer(app)
