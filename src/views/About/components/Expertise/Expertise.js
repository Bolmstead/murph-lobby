import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const clientData = [
  {
    name: "3M",
    image: "/clients/3m.png",
  },

  {
    name: "ISA",
    image: "/clients/ISA.png",
  },
  {
    name: "Performance Protocol",
    image: "/clients/PerformanceProtocol.jpeg",
  },
  {
    name: "CPTPA",
    image: "/clients/CPTPA.jpg",
  },
  {
    name: "Premier Aggregates",
    image: "/clients/PremierAggregates.png",
  },
  {
    name: "SITPA",
    image: "/clients/SITPA.png",
  },
];

const Expertise = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={"center"}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Clients
        </Typography>
        <Typography variant="h6" align={"center"} color={"text.secondary"}>
          Wittmeyer & Associates has worked with a wide range of clients in a
          variety of Industries.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {clientData.map((client, i) => (
          <Grid item xs={12} md={4} key={i}>
            <CardContent
              sx={{
                padding: 3,
                height: "200px", // Adjusted height for client logos
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={client.image}
                alt={client.name}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "150px",
                  objectFit: "contain",
                  marginBottom: 2,
                }}
              />
              {/* <ListItemText
                sx={{ margin: 0 }}
                primary={client.name}
                primaryTypographyProps={{
                  variant: "h6",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              /> */}
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Expertise;
