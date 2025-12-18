
export default async function handler(req, res) {
  const { id } = req.query;
  const API_KEY = process.env.SPOONACULAR_API_KEY;

  if (!id) {
    return res.status(400).json({ error: "Missing recipe ID" });
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );

    if (response.status === 402 || response.status === 429) {
      return res.status(response.status).json({ error: "API quota exceeded" });
    }

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch recipe details" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
