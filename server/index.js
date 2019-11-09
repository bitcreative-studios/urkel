import forky from "forky"
import { cpus } from "os"

// const NUMBER_OF_CORES = cpus().length
const NUMBER_OF_CORES = 1

forky({
  path: `${__dirname}/worker_server.js`,
  workers: process.env.WEB_CONCURRENCY || NUMBER_OF_CORES,
  enable_logging: true,
})
