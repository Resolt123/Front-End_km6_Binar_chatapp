import { Avatar, Box } from "@mui/material";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function MessageItem({ data }) {
  return (
    <Card body>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            mb: "1rem",
          }}
        >
          <Avatar alt={data?.user.name || "No Name"} src={data?.user.image} />
          <h6>{data?.user.name || "No Name"}</h6>
        </Box>
        <p>
          {new Date(data?.createdAt).toLocaleDateString("id-ID")}{" "}
          {new Date(data?.createdAt).toLocaleTimeString("id-ID")}
        </p>
      </Box>
      <p>{data?.message}</p>
    </Card>
  );
}

MessageItem.propTypes = {
  data: PropTypes.object,
};

export default MessageItem;
