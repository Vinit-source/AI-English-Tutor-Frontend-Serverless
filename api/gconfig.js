// api/gconfig.js
export default function handler(req, res) {
    const mySecret = process.env.GEMINI_API_KEY;
    if (!mySecret) {
        res.status(500).json({ error: "GEMINI_API_KEY is not set in environment variables" });
    } else {
        res.status(200).json({ secret: mySecret });
    }
  }

  