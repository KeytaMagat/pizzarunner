import { Height } from "@mui/icons-material";
import Button_LandingOrder from "../../ui/Button_LandingOrder";
import { Container, Box, } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function VTpage() {
  return (
    <div className="vegetarian" id="vegetarian" >
      <Grid className='VTpage' display={"flex"} flexDirection={"row"} >
        <Container maxWidth="fixed"
          style={{
            // backgroundColor: "red",
            display: "grid",
            justifyContent: "center",
            paddingBlock: 180,
            
          }}>
            <Box>
              <img className="vttext" style={{width: 566, height: 392}} src="./newimages/VTpage/VG_TEXT.png" alt="Vegetarian Food"/>
                <Box display={"flex"} justifyContent={"center"} marginTop={10}>
                    <img style={{width:250, height:90}} src="./newimages/Button.png" alt="button"/>
                </Box>
            </Box>
        </Container>
        <Container
          style={{ 
              // backgroundColor:"green",
              paddingBlock: 50,
              display: "flex"
          }}>
            <img className="vtfood" style={{width: 900, height: 830}} src="./newimages/VTpage/food.png" alt="Vegetarian Food"/>
        </Container>
      </Grid>
    </div>
  );
}