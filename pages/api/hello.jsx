import connectMongo from "../../database/conn";

function handler(req, res) {
  connectMongo()
  res.status(200).json({name: "John Doe"})
}

export default handler