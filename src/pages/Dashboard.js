import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
// import { mockTransactions } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
import {DirectionsWalk, Whatshot,Favorite, CheckCircle} from "@mui/icons-material";
// import {} from "@mui/icons-material";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
import StatBox from "../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";
import {steps} from "../components/StepCounter";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(rank, name, points) {
  return { rank, name, points };
}

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const rows = [
    createData(1,"Brody",100),
    createData(1,"Brody",100),
    createData(1,"Brody",100),
    createData(1,"Brody",100),
    
  ];
//   (function(d, m){
//     var kommunicateSettings = 
//         {"appId":"1f4e4b1f421c3c134da03fe3aeafaff47","popupWidget":true,"automaticChatOpenOnNavigation":true};
//     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//     window.kommunicate = m; m._globals = kommunicateSettings;
// })(document, window.kommunicate || {});

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        

        {/* <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box> */}
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="100"
            subtitle="Steps covered"
            progress="0.75"
            // increase="+14%"
            icon={
              <DirectionsWalk
                sx={{ color: colors.greenAccent[600], fontSize: "32px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="23"
            subtitle="Calories burnt"
            progress="0.50"
            increase="+21%"
            icon={
              <Whatshot
                sx={{ color: colors.greenAccent[600], fontSize: "32px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="72"
            subtitle="Heartbeat Rate"
            progress="0.30"
            increase="+5%"
            icon={
              <Favorite
                sx={{ color: colors.greenAccent[600], fontSize: "32px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="7"
            subtitle="Streak"
            progress="0.80"
            increase="+43%"
            icon={
              <CheckCircle
                sx={{ color: colors.greenAccent[600], fontSize: "32px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Progress Chart
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                {/* $59,342.32 */}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
            {/* <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/1dba5e8b-aca7-44d6-bf34-23f5ad47c187"></iframe> */}
          </Box>
          {/* <Box height="250px">
    <iframe
      width="300px"
      height="250px"
      allow="microphone;"
      src="https://console.dialogflow.com/api-client/demo/embedded/1dba5e8b-aca7-44d6-bf34-23f5ad47c187"
    ></iframe>
  </Box> */}
          
        </Box>

        {/* <Box  gridColumn="span 8">
        <TableContainer component={Paper}> */}
      {/* <Table sx={{  width: "100%", height: "300px", backgroundColor:"#1F2A40"}} size="medium" aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Points</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          {/* </TableRow>
        </TableHead> */ }
        {/* <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            > */}
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              {/* <TableCell >{row.rank}</TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.points}</TableCell> */}
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            {/* </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box> */}

        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h3" fontWeight="600">
              LEADERBOARD
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box color={colors.grey[100]}>{transaction.date2}</Box>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                  marginLeft="30px"
                  fontSize="20px"
                >
                  {transaction.txId}
                </Typography>
                {/* <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography> */}
                
              {/* </Box> */}

              {/* <Box color={colors.grey[100]}>{transaction.date}</Box> */}
              {/* <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                marginRight="30px"
              >
                ${transaction.cost}
              </Box> */}
            {/* </Box> */}
          {/* ))} */}
        {/* </Box> */}

        {/* ROW 3
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;