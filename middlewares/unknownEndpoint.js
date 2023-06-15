export default function unknownEndpoint(_req, res) {
  return res.status(404).json({ error: "unknown endpoint" });
}
