export default async function handler(req, res) {
  const { query } = req.query;
  const API_KEY = process.env.SPOONACULAR_API_KEY;

  if (!query) {
    return res.status(400).json({ error: "Missing query" });
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`
    );

    if (response.status === 402 || response.status === 429) {
      return res.status(response.status).json({ error: "API quota exceeded" });
    }

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch recipes" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
