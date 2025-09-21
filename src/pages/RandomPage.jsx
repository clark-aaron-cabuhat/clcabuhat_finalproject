import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

import { fetchCategorizedBooks } from "../functions/Axios.jsx";
import Subjects from "../resources/Subjects.jsx";

import BookCardComponent from "../components/BookCardComponent.jsx";

import ShuffleIcon from '@mui/icons-material/Shuffle';

function RandomPage() 
{
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [books, setBooks] = useState([]);

    const handleSurprise = async () => 
    {
        const currentCategory = Subjects[categoryIndex];
        console.log(currentCategory);
        
        const data = await fetchCategorizedBooks(currentCategory, 12);
        setBooks(data);

        setCategoryIndex((prevIndex) => (prevIndex+1) % Subjects.length);
    }

    //#region RandomResult

        function RandomResult()
        {
            return <>
                <Box
                    sx={{ my: 6, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5, maxWidth: 1200}}
                >
                    {books.map((book, index) => (
                        <BookCardComponent
                            key={index}
                            title={book.title}
                            author={book.author}
                            year={book.year}
                            rating={book.rating}
                            image={book.image}
                            description={book.description}
                        />
                    ))}

                </Box>
            
            </>
        }

    //#endregion

    //#region Main
    return <>
        <Box
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center', p: 2}}
        >
            <Typography
                variant="h3"
                sx={{ mb: 2, fontWeight: 'bold' }}
            >
                Random Book Discovery
            </Typography>

            <Typography 
                variant="h6"
                sx={{ mb: 4, fontWeight: 'bold' }}
            >
                Discover new books with our surprise selection
            </Typography>

            <Button
                variant="outlined" 
                size="large"
                startIcon={<ShuffleIcon />}
                onClick={handleSurprise}
            >
                SURPRISE ME!
            </Button>

            {books.length > 0 && <RandomResult />}
            
        </Box>
    </>
    //#endregion
}

export default RandomPage;