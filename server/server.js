
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/recipes", async (req, res) => {
  try {
    console.log(
      "API key loaded:",
      Boolean(process.env.RECIPE_API_KEY)
    );

    const ingredients = req.query.ingredients;

    if (!ingredients) {
      return res.status(400).json({
        error: "Please provide ingredients.",
      });
    }

    const apiResponse = await fetch(
      `https://recipeapi.io/api/v1/recipes?ingredients=${encodeURIComponent(ingredients)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.RECIPE_API_KEY}`,
        },
      }
    );

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      return res.status(apiResponse.status).json(data);
    }

    res.json(data);
  } catch (error) {
    console.error("Recipe search failed:", error.message);
    res.status(500).json({
      error: "Unable to fetch recipes.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
