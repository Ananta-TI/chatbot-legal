import { useState } from "react";

function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Halo, saya chatbot sederhana."
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input
    };

    const botMessage = {
      sender: "bot",
      text: `Kamu berkata: ${input}`
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage
    ]);

    setInput("");
  };

  return (
    <main className="section-band">
      <div className="container">
        <div className="card-light interactive-card overflow-hidden">
          <div className="section-surface p-8">
            <h2 className="title-md">Chatbot</h2>
            <p className="body-md mt-3">
              Tanyakan apapun soal hukum perlindungan anak dan dapatkan jawaban yang jelas langsung dari AI.
            </p>
          </div>

          <div style={{ padding: "1.5rem" }}>
            <div className="chat-window">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ketik pesan..."
                className="input"
              />

              <button
                onClick={sendMessage}
                className="btn btn-primary"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChatbotPage;