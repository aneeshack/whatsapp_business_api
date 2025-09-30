📱 WhatsApp Message Sender (Test App)

A simple full-stack application to send WhatsApp messages using the Meta WhatsApp Cloud API.

Frontend: React (Vite) – in the base folder

Backend: Node.js + Express – inside /backend

API: WhatsApp Cloud API

⚙️ Features

Send the initial hello_world template message (required for new users).

Automatically follow up with a custom text message.

Simple React UI for inputting recipient number and message.

Securely uses environment variables for API credentials.

📂 Project Structure
whatsappIntegrate/
│
├── backend/              # Express server
│   ├── routes/whatsapp.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── src/                  # React app (frontend)
│   ├── SendMessage.jsx
│   └── main.jsx
│
├── package.json          # Frontend dependencies
├── vite.config.js
└── README.md

🔑 Requirements

Node.js v18+

A Meta Developer Account with WhatsApp Cloud API enabled

A registered WhatsApp Business Phone Number

🛠️ Setup
1. Clone the repo
git clone https://github.com/your-username/whatsappIntegrate.git
cd whatsappIntegrate

2. Backend setup
cd backend
npm install


Create a .env file inside backend/ with your credentials:

WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
WHATSAPP_TOKEN=your_long_lived_access_token
PORT=7200


Start the backend:

npm start


Backend runs on: http://localhost:7200

3. Frontend setup

Go back to the root folder (frontend lives in the base folder):

cd ..
npm install
npm run dev


Frontend runs on: http://localhost:5173
 (default Vite port)

🚀 Usage

Open the frontend in your browser.

Enter the recipient’s WhatsApp number in international format (e.g. +919876543210).

Type your message.

Click Send Message.

The backend will:

First send the hello_world template (required if user hasn’t interacted before).

Then send your custom text message.

⚠️ Important Notes

First message to a new user must be a template message.

After that, you can send free-form text messages within 24 hours of the user’s last reply.

If 24 hours pass, you must start again with a template message.

Access tokens expire → always use a long-lived token (60 days). Refresh when expired.

📌 Future Improvements

Auto-detect if hello_world was already sent to avoid duplicates.

Store sent message history in a database.

Add support for images, documents, and custom templates.

✨ Enjoy testing WhatsApp Cloud API with your own UI!