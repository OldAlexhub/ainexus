import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Handbook = () => {
  const [input, setInput] = useState(""); // To capture user input
  const [messages, setMessages] = useState([]); // To store conversation history
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const [isBotTyping, setIsBotTyping] = useState(false); // To manage bot typing status

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return; // Avoid empty submissions

    // Add user's message to the chat
    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setLoading(true); // Set loading while waiting for response
    setIsBotTyping(true); // Set bot typing state to true

    try {
      // Send the searchedTerm to Node.js backend
      const response = await axios.get(
        `${process.env.REACT_APP_GET_POLICIES}/${encodeURIComponent(input)}`
      );

      const { bestMatchPolicy } = response.data.data;

      // Simulate bot typing with a delay
      setTimeout(() => {
        const botResponse = {
          sender: "bot",
          text: `Policy: ${bestMatchPolicy}`,
        };

        // Add bot response to chat and turn off typing indicator
        setMessages((prevMessages) => [...prevMessages, botResponse]);
        setIsBotTyping(false); // Turn off bot typing status
      }, 1500); // Delay of 1.5 seconds to simulate typing
    } catch (error) {
      console.error("Error fetching policy");
      const errorMessage = {
        sender: "bot",
        text: "Sorry, something went wrong. Please try again later.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
      setIsBotTyping(false); // Turn off bot typing status
    } finally {
      setLoading(false); // Turn off loading state
      setInput(""); // Clear input field
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="shadow-lg">
            <Card.Header className="bg-primary text-white text-center">
              <h4>AI Handbook Chatbot</h4>
              <p>Ask questions about company policies</p>
            </Card.Header>
            <Card.Body>
              {/* Chat window */}
              <div
                className="chat-window mb-3"
                style={{
                  height: "300px",
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "10px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                {messages.length === 0 && (
                  <p className="text-muted text-center">
                    Start by asking about a company policy!
                  </p>
                )}
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message ${
                      msg.sender === "user" ? "text-end" : "text-start"
                    }`}
                  >
                    <p
                      className={`message-text ${
                        msg.sender === "user"
                          ? "bg-primary text-white p-2 rounded"
                          : "bg-light p-2 rounded"
                      }`}
                    >
                      {msg.text}
                    </p>
                  </div>
                ))}
                {/* Show bot typing indicator */}
                {isBotTyping && (
                  <p className="text-muted text-center">Bot is typing...</p>
                )}
              </div>

              {/* Input form */}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formSearch">
                  <Form.Control
                    type="text"
                    placeholder="Ask about a company policy..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={loading}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3 w-100"
                  disabled={loading}
                >
                  {loading ? "Analyzing..." : "Ask"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Handbook;
