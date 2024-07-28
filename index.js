const express = require("express")
const app = express()
const cors = require("cors")

const {router} = require("./router/download")
app.use(cors())



app.use("/download",router);


app.listen(process.env.PORT, () => {
  console.log("Node app running at 3001 port")
})