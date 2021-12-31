import data from "./store";

export default function handler(req, res) {
  const { products } = data;
  res.status(200).json(data);
}
