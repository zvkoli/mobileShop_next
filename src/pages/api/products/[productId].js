import productsData from "@/data/productsData";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { productId } = req.query;
    const token = req.headers.authorization?.split(" ")[1];

    if (!token || token === "null" || token === "undefined") {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const product = productsData.find((p) => p.id === parseInt(productId));

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.status(200).json({ status: "success", product });
    } catch (error) {
      console.error("error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
