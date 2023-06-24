import { Height } from "@mui/icons-material";
import Button_LandingOrder from "../../ui/Button_LandingOrder";
import { Container, Box, } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function MLpage() {
  return (
    <div className="meatlover" id="meatlover">
      <Grid className='MLpage' display={"flex"} flexDirection={"row"}>
        <Container maxWidth="fixed"
          style={{
            // backgroundColor: "red",
            // paddingInline: "15vh",
            display: "flex",
            paddingLeft: 0
          }}>
            <img className="mlfood" src="./newimages/MLpage/food.png" alt="Meat Lover Food"/>
        </Container>
        <Container
            style={{ 
                // backgroundColor:"green",
                marginRight: 150
            }}>
            <Box maxWidth="fixed"
            style={{
                // backgroundColor: "blue",
                marginBlock: 150, 
                display: "grid",
                justifyContent: "center"
                
            }}>
                <img className="mltext" style={{width:598, height:348}} src="./newimages/MLpage/ML_TEXT.png" alt="Meat Lover Food"/>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <img style={{width:250, height:90}} src="./newimages/Button.png" alt="button"/>
            </Box>
        </Container>
      </Grid>
    </div>
  );
}