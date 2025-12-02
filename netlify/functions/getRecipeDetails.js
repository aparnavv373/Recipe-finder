export async function handler(event) {
  const id = event.queryStringParameters.id;
  const apiKey = process.env.SPOON_API;

  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

  try {
    const response = await fetch(url);

    const data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" })
    };
  }
}
