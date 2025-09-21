import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { fetchSearchQuery } from '../functions/Axios.jsx';

import BookCardComponent from "../components/BookCardComponent.jsx";

import SearchIcon from "@mui/icons-material/Search";


function BrowsePage() 
{
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async () =>
    {
        if (!query.trim()) return;
        const data = await fetchSearchQuery(query);
        setResults(data);
        console.log(data);
    }

    //#region Results
    function Results()
    {
        return <>
            <Box
                sx={{ mt: 6, display: "flex", justifyContent: "center" }}
            >
                <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5, maxWidth: 1200}}
                >
                    {results.map((book, index) => (
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
            </Box>
        </>
    }
    //#endregion

    //#region Main
    return <>
    
        <Box
            sx={{ display: "flex", flexDirection: "column", alignItems: "center",  justifyContent: "center", minHeight: "80vh" }}
        >
            <Typography 
                variant="h2"
                sx={{ mb: 3, fontWeight: "bold" }}
            >
                Browse Books
            </Typography>

            <Box
                sx={{ display: "flex", gap: 1 }}
            >
                <TextField
                    placeholder="Search for books, authors, or subjects..."
                    variant="outlined"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") handleSearch();
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                    sx={{ width: 1025 }}
                />

                <Button variant="contained" onClick={handleSearch}>
                    Search
                </Button>
                
            </Box>

            {results.length > 0 && <Results/>}

        </Box>
    </>
    //#endregion
}

export default BrowsePage;