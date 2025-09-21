import { Box, Button, CardMedia, Dialog, DialogContent, DialogContentText, IconButton, Typography } from "@mui/material";
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

function BookModalComponent({ book, open, handleClose})
{
    if (!book) return null;

    const [expanded, setExpanded] = useState(false);

    const truncatedDescription = book.description && book.description.length > 250
    ? book.description.slice(0, 250) + "..."
    : book.description;

    return <>
       <Box>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>

                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{ position: "absolute", right: 8, top: 8, color: "grey.500" }}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent>
                    <Box sx={{ display: "flex", gap: 3 }}>

                        <Box sx={{ flex: "0 0 200px" }}>
                            <CardMedia
                                component="img"
                                image={book.image}
                                alt={book.title}
                                sx={{ width: "100%", height: "100%", borderRadius: 1 }}
                            />
                        </Box>

                        <Box sx={{ flex: 1 }}>

                            <Typography 
                                variant="h5" 
                                fontWeight="bold"
                            >
                                {book.title}
                            </Typography>

                            <Typography 
                                variant="subtitle1" 
                                fontWeight="bold" 
                                sx={{ mb: 2 }}
                            >
                                {book.author}
                            </Typography>

                            <Box 
                                sx={{ display: "flex", alignItems: "center", mb: 1 }}
                            >
                                <Typography 
                                    variant="body2" 
                                >
                                    ⭐ {book.rating}
                                </Typography>
                            </Box>

                            <Typography 
                                variant="caption" 
                                display="block"
                                gutterBottom
                            >
                                Published: {book.year}
                            </Typography>

                            <Typography 
                                variant="caption" 
                                display="block" 
                                gutterBottom
                            >
                                Subjects: {book.subject || "Not specified"}
                            </Typography>

                            
                            <DialogContentText 
                                variant="body2" 
                                sx={{ mt: 2,   maxHeight: 300, overflow: 'auto', pr: 1 }}
                            >
                                {expanded ? book.description : truncatedDescription}
                            </DialogContentText>

                            {book.description && book.description.length > 300 && (
                                <Button
                                    variant="text"
                                    size="small"
                                    sx={{ mt: 1, p: 0, minWidth: "unset" }}
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    {expanded ? "See less" : "See more"}
                                </Button>
                            )}
                        </Box>
                        
                    </Box>
                </DialogContent>
            </Dialog>
       </Box>
    </>
}

export default BookModalComponent;