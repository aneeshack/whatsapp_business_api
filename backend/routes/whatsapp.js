import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/send-message", async (req, res) => {
  try {
    console.log("Inside send message API...");
    const { to, message } = req.body;

    if (!to || !message) {
      return res.status(400).json({ error: "Recipient and message are required" });
    }

    const url = `https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

    // Step 1: Send hello_world template
    const helloWorldRes = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "template",
        template: {
          name: "hello_world",
          language: { code: "en_US" },
        },
      }),
    });

    const helloWorldData = await helloWorldRes.json();
    console.log("Hello World Response:", JSON.stringify(helloWorldData, null, 2));

    // If hello world failed, stop here
    if (!helloWorldRes.ok) {
      return res.status(400).json({ error: "Failed to send hello_world", details: helloWorldData });
    }

    // Step 2: Send custom text message
    const textRes = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: message },
      }),
    });

    const textData = await textRes.json();
    console.log("Text Message Response:", JSON.stringify(textData, null, 2));

    if (!textRes.ok) {
      return res.status(400).json({ error: "Failed to send text message", details: textData });
    }

    res.json({
      success: true,
      helloWorld: helloWorldData,
      textMessage: textData,
    });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;












// import express from "express";
// import fetch from "node-fetch";

// const router = express.Router();

// router.post("/send-message", async (req, res) => {
//   try {
//     console.log("Inside send message API...");
//     const { to, message } = req.body;

//     if (!to || !message) {
//       return res.status(400).json({ error: "Recipient and message are required" });
//     }

//     const url = `https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       // body: JSON.stringify({
//       //   messaging_product: "whatsapp",
//       //   to,
//       //   type: "text",
//       //   text: { body: message },
//       // }),

//           body: JSON.stringify({
//   messaging_product: "whatsapp",
//   to,
//   type: "template",
//   template: {
//     name: "hello_world",
//     language: { code: "en_US" }
//   }
// })
//     });

//     const data = await response.json();
//     console.log("WhatsApp API Response:", JSON.stringify(data, null, 2));
//     res.json(data);
//   } catch (error) {
//     console.error("Error sending message:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;



