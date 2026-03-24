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
      baseURL: "https://api.groq.com/openai/v1",  // ✅ Groq endpoint
      apiKey: process.env.GROQ_API_KEY,            // ✅ Groq key
    });

    const response = await client.chat.completions.create({  // ✅ Groq uses this
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: length ?? 500,                   // ✅ Groq uses max_tokens
    });

    const content = response.choices[0].message.content;  // ✅ Groq response format

    if (!content) {
      return res.status(500).json({
        success: false,
        message: "AI returned empty content",
      });
    }

    req.aiContent = content;
    req.prompt = prompt;
    next();
  } catch (error) {
    console.error("Groq error:", error);
    res.status(500).json({
      success: false,
      message: "Content generation failed",
    });
  }
};