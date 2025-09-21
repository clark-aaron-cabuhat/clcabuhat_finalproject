import { Avatar, Box, Card, CardContent, Chip, List, ListItem, ListItemText, Typography, } from "@mui/material";

import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import SkillsData from '../resources/SkillsData';

function AboutPage() 
{
    
    //#region DeveloperInfo
    function DeveloperInfo()
    {
        return <>
            <Box
                sx={{ display: "flex", justifyContent: "center", gap: 2, maxWidth: "100%" }}
            >
                <Card
                    sx={{ maxWidth: 800, mb: 3, p: 2 }}
                >
                    <CardContent>

                        <Box
                            sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                        >
                            <Avatar
                                alt="Clark"
                                src="https://media.licdn.com/dms/image/v2/D4D03AQFa_MEd4keO4A/profile-displayphoto-crop_800_800/B4DZeiRGacHMAI-/0/1750774081727?e=1761177600&v=beta&t=L79o0146fwASnXUYT2b8-60b2DVmkYIurOcs5g2bIOk"
                                sx={{ width: 250, height: 250 }}
                            />
                        </Box>

                        <Typography 
                            variant="h4" 
                            align="center" 
                            fontWeight="bold" 
                            sx={{ mb: 1 }}
                            gutterBottom
                        >
                            Clark Aaron Cabuhat
                        </Typography>

                        <Typography 
                            variant="body1"
                            align="center" 
                            sx={{ mb: 2 }}
                        >
                            I'm currently a trainee at Citco Philippines, practicing my skills in React JavaScript, and API integration.  
                            I have a strong passion for web development and continuously seek to improve my skills through hands-on projects and learning new technologies.
                        </Typography>

                        <Typography 
                            variant="body2" 
                            align="center"
                        >
                            This book discovery app was built using React, Material-UI, and the Open Library API.  
                            It features responsive design, dark theme, and modern UI components.
                        </Typography>

                    </CardContent>
                </Card>
            </Box>
        </>
    }
    //#endregion

    //#region Education and Experience
    function EducationAndExperience()
    {
        return <>
            <Box
                sx={{ display: "flex", justifyContent: "center", gap: 3, width: "100%", maxWidth: 800, flexWrap: "wrap"}}
            >
                <Card
                    sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}
                >
                    <CardContent 
                        sx={{ flex: 1 }}
                    >

                        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                            <SchoolIcon color="primary" sx={{ fontSize: 40 }} />
                        </Box>

                        <Typography 
                            variant="h5"
                            align="center" 
                            gutterBottom
                        >
                            Education
                        </Typography>

                        <List>
                            <ListItem>
                                <ListItemText primary="College of Saint Lawrence" secondary="Elementary" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Balagtas National Agricultural High School" secondary="Junior High School" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Immaculate Conception Child Development Center Inc." secondary="Senior High School" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Bulacan State University" secondary="College" />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>

                <Card
                    sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}
                >
                    <CardContent 
                        sx={{ flex: 1 }}
                    >

                        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                            <WorkIcon color="primary" sx={{ fontSize: 40 }} />
                        </Box>

                        <Typography 
                            variant="h5"
                            align="center" 
                            gutterBottom
                        >
                            Experience
                        </Typography>

                       <List>

                            <ListItem>
                                <ListItemText 
                                    primary="Freelance" 
                                    secondary="Individual/Team" 
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText 
                                    primary="Full-Stack Developer" 
                                    secondary="AssetWise - AGAPAY TUGON - CICT Research and Extension Project"
                                />
                            </ListItem>

                        </List>
                    </CardContent>
                </Card>
            </Box>
        </>
    }
    //#endregion

    //#region Skills
    function Skills()
    {
        const typeColors = 
        {
            "Frontend": "primary",
            "Backend": "success",
            "Database": "warning", 
            "API Testing": "info", 
            "Version Control": "secondary",
        };

        return <>
            <Box 
                sx={{ display: "flex", justifyContent: "center", my: 3, width: "100%" }}
            >
                <Card 
                    sx={{ width: "100%", maxWidth: 800, p: 2 }}
                >
                    <CardContent>
                        <Typography 
                            variant="h6"  
                            align="center" 
                            fontWeight="bold" 
                            gutterBottom
                        >
                            My Skills
                        </Typography>

                        <Box
                            sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 1, mt: 1}}
                        >
                            {SkillsData.map((skill, index) => (
                                <Chip 
                                    key={index} 
                                    label={skill.name} 
                                    color={typeColors[skill.type] || "default"} 
                                    size="small" 
                                    icon={<CodeIcon />}
                                />
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    }
    //#endregion

    //#region AboutPage Return
    return <>
        <Box
            sx={{  display: "flex", flexDirection: "column", alignItems: "center", p: 3, }}
        >
            <Typography 
                variant="h3"
                sx={{ mb: 3, fontWeight: "light" }}
            >
                About the Developer
            </Typography>

            <DeveloperInfo />
            <EducationAndExperience />
            <Skills />


        </Box>
    </>
    //#endregion
}

export default AboutPage;