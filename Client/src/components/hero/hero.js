import { styled, Box, Button, Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
    color: "text.primary",
    fontWeight: "bold",
    maxWidth: '80%',
    [theme.breakpoints.down("lg")]: {
        maxWidth: '100%',
        fontSize: "36px",
      },
    [theme.breakpoints.down("md")]: {
        textAlign: 'center',
        maxWidth: '100%',
        fontSize: "32px",
      },
    [theme.breakpoints.down("sm")]: {
        textAlign: 'center',
        maxWidth: '100%',
        fontSize: "28px",
    },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
    color: "#808080",
    fontWeight: "regular",
    maxWidth: '80%',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("md")]: {
        textAlign: 'center',
        maxWidth: '100%',
        fontSize: "18px",
      },
    [theme.breakpoints.down("sm")]: {
        textAlign: 'center',
        maxWidth: '100%',
        fontSize: "16px",
    },
}));

export const HeroImage = styled("img")(({ theme }) => ({ 
    maxWidth: '100%',
    borderRadius: "250px",
    [theme.breakpoints.down("md")]: {
        maxWidth: '80%',
        display: "none",
    },
}));

export const InputBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    margin: theme.spacing(0, 0, 0, 3),
    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        margin: theme.spacing(0, 0, 0, 0),
    },
  }));

export const CustomButton = styled(Button)(({ theme }) => ({
    color: '#ffffff',
    padding: '5px 18px',
    borderRadius: '10px',
    boxShadow: 'none',
    backgroundColor: '#FF7722', 
    height: '56px',
    margin: theme.spacing(0, 1, 0, 0),
    "&:hover": {
        boxShadow: 'none',
        backgroundColor: '#f25d00',
    },
    [theme.breakpoints.down("md")]: {
        height: '56px', 
        width:'232px',
    },
}));