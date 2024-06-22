import { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client"; // This socket.io package

import { Box } from "@mui/material";
import AddMessage from "../../components/Message/AddMessage";
import MessageItem from "../../components/Message/MessageItem";
import { getAllMessages } from "../../redux/actions/message";

// Initialization connect to backend websocket (socket.io)

function Home() {
  const socket = io(import.meta.env.VITE_WEBSOCKET_API);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { messages } = useSelector((state) => state.message);

  const [typing, setTyping] = useState(false);
  const [typingMessage, setTypingMessage] = useState("");
  // Declare a variable for the timeout outside of the useEffect
  const typingTimeoutRef = useRef();

  // This useEffect will get all messages from backend
  useEffect(() => {
    // Dispatch the getAllMessages actions
    dispatch(getAllMessages());
  }, [dispatch]);

  // This useEffect is to connect to backend websocket (socket.io)

  useEffect(() => {
    // Connect to backend
    socket.on("connect", () => {});

    // It will listen the event name "message"
    socket.on("message", (message) => {
      console.log("aku dijalankan!", message);
      dispatch(getAllMessages());
    });

    socket.on("ontyping", (typingUser) => {
      // Clear the previous timeout
      clearTimeout(typingTimeoutRef.current);

      if (typingUser.userId !== user.id) {
        setTypingMessage(`${typingUser.userName} sedang mengetik...`);
        typingTimeoutRef.current = setTimeout(() => {
          setTypingMessage(null);
        }, 3500);
      }
    });

    socket.on("getAllMessages", () => {
      console.log("what happen?");
    });
  }, [dispatch]);

  return (
    <>
      <Row className="my-4">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
          classname="gap-2"
        >
          {messages?.length > 0 &&
            messages?.map((message) => (
              <MessageItem data={message} key={message.id} />
            ))}
          <Col>
            <h6>{typingMessage}</h6>
          </Col>
        </Box>

        <AddMessage socket={socket} />
      </Row>
    </>
  );
}

export default Home;
