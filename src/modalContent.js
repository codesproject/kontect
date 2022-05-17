import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function ModalContent(props) {
  return (
    <div>
      <Box variant="body2" MdCnText={props.MyMDContent} />
      This is the game
      <Typography
        sx={{
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button variant="contained">CONFIRM</Button>
        <Button variant="outlined" color="error">
          CANCEL
        </Button>
      </Typography>
    </div>
  );
}

export default ModalContent;
