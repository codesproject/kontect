import img from "./images/paella.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { flexbox } from "@mui/system";
import Modalpop from "./modal";

function Cont(props) {
  const [clicks, setClicks] = useState("Species");
  const [Numb, Setnumb] = useState("  A new receipe")

  function handleClick() {
    setClicks ( Numb );
  }

  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {clicks}
        </Typography>
        <Typography variant="" color="text.secondary">
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ display: flexbox, justifyContent: "space-between" }}>
        <Button
          onClick={handleClick}
          size="medium"
          variant={props.btnVar}
          color={props.btnColor}
        >
          {props.btn01}
        </Button>
        <Button
          sx={{ fontWeight: 500 }}
          size="medium"
          variant="contained"
          color={props.btn2Color}
        >
          Learn
        </Button>
        <Modalpop
          modalBtn={props.btn3}
          MyContent={props.MContent}
          ModalContHandler1={props.ModalContMn}
        />
      </CardActions>
    </Card>
  );
}

export default Cont;
