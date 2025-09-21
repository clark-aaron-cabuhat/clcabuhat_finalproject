import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import MenuBookIcon from '@mui/icons-material/MenuBook';

function Navigation ()
{

    const navigate = useNavigate();

    const paths = 
    [
        { name: "TRENDING", path: "/trending" },
        { name: "BROWSE", path: "/browse" },
        { name: "RANDOM", path: "/random" },
        { name: "ABOUT", path: "/about" },
    ];

    return <>
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <MenuBookIcon />
                    <Box 
                        sx={{ display: "flex", alignItems: "center", ml: 1 }}
                    >

                        <Typography 
                            variant="h6"
                            onClick={() => navigate("/")}
                            sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer", pl: 1, pr: 2 }} 
                        >
                            BOOKSHELF
                        </Typography>

                        {paths.map((path, index) => (
                            <Typography 
                                key={index}
                                variant="p"
                                onClick={() => navigate(path.path)}
                                sx={{ cursor: "pointer", fontWeight: "bold", px: 1}}
                            >
                                {path.name}
                            </Typography>
                        ))}

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    </>
}

export default Navigation;