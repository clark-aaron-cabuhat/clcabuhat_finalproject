import { Box, Card, CardMedia, CardContent, Chip, Typography } from "@mui/material";
import { useState } from "react";

import BookModalComponent from "./BookModalComponent";

import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function BookCardComponent(book) 
{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return <>
        <Box>
            <Card 
                sx={{ width: 250, height: 360, bgcolor: "background.paper", borderRadius: 2, display: 'flex', flexDirection: 'column' }}
                onClick={handleOpen}
            >
                <CardMedia
                    component="img"
                    height="150"
                    image={book.image}
                    alt={book.title}
                    sx={{ objectFit: "cover" }}
                />

                <CardContent
                    sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1}}
                >

                    <Box>

                        <Typography 
                            variant="h6" 
                            component="div" 
                            gutterBottom 
                            noWrap
                        >
                            {book.title}
                        </Typography>

                        <Typography 
                            variant="body2" 
                            color="text.secondary" 
                            noWrap
                        >
                            by {book.author}
                        </Typography>

                        <Typography 
                            variant="caption" 
                            display="block"
                        >
                            Published: {book.year}
                        </Typography>

                    </Box>

                    <Box 
                        sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}
                    >

                        {book.rank && (
                            <Chip
                                label={`#${book.rank} Trending`}
                                size="small"
                                sx={{ height: 24, fontSize: "0.75rem" }}
                                icon={<TrendingUpIcon/>}
                            />
                        )}

                        <Typography variant="body2" sx={{ ml: 1 }}>
                            ⭐ {book.rating}
                        </Typography>
                    </Box>


                </CardContent>
            </Card>

            <BookModalComponent open={open} handleClose={handleClose} book={book} />
        </Box>
    </>
}

export default BookCardComponent;