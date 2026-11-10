
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/recipes", async (req, res) => {
  try {
    const { ingredients, preference = "vegetarian" } = req.query;

    if (!ingredients) {
      return res.status(400).json({
        error: "Please provide ingredients.",
      });
    }

    const allowedPreferences = [
      "vegetarian",
      "non-vegetarian",
      "all",
    ];

    if (!allowedPreferences.includes(preference)) {
      return res.status(400).json({
        error: "Invalid food preference.",
      });
    }

    if (!process.env.RECIPE_API_KEY) {
      return res.status(500).json({
        error: "Recipe API key is not configured.",
      });
    }

    const params = new URLSearchParams();
    params.set("ingredients", ingredients);

    if (preference === "vegetarian") {
      params.set("dietary_tags", "vegetarian");
    }

    const apiResponse = await fetch(
      `https://recipeapi.io/api/v1/recipes?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.RECIPE_API_KEY}`,
        },
      }
    );

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      console.error("Recipe API error:", data);

      return res.status(apiResponse.status).json({
        error: data.message || "Recipe API request failed.",
      });
    }

    res.json(data);

  } catch (error) {
    console.error("Recipe search failed:", error.message);

    res.status(500).json({
      error: "Unable to fetch recipes.",
    });
  }
});

app.get("/", (req, res) => {
  res.send("What2Cook API is running!");
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
