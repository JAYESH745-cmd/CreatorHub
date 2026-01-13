import OpenAI from "openai";

export const getContent = async (req, res, next) => {
  try {
   
    const { prompt, length } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
      temperature: 0.7,
      max_output_tokens: length ?? 500,
    });
    const content = response.output_text;

    if (!content) {
      return res.status(500).json({
        success: false,
        message: "AI returned empty content",
      });
    }

    // pass ONLY what you need
    req.aiContent = content;
    req.prompt=prompt;
    next();
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({
      success: false,
      message: "Content generation failed",
    });
  }
};
