import BookCardComponent from "../components/BookCardComponent";
import { Box, Divider, Typography } from "@mui/material";

import { useState, useEffect } from "react";
import { fetchTrendingBooks, fetchCategorizedBooks } from "../functions/Axios";

function TrendingPage() 
{
    const [trendingBooks, setTrendingBooks] = useState([]);
    const [fictionBooks, setFictionBooks] = useState([]);
    const [scienceTechBooks, setScienceTechBooks] = useState([]);
    const [historyBioBooks, setHistoryBioBooks] = useState([]);

    const loadBooks = async () => {

      const trendingData = await fetchTrendingBooks();
      const fictionData = await fetchCategorizedBooks('Fiction', 6);
      const scienceTechData = await fetchCategorizedBooks('Science&Technology', 6);
      const historyBioData = await fetchCategorizedBooks('History&Biography', 6);

      setTrendingBooks(trendingData);
      setFictionBooks(fictionData);
      setScienceTechBooks(scienceTechData);
      setHistoryBioBooks(historyBioData);

    };

    useEffect(() => {
        loadBooks();
    }, []);


    //#region TrendSection
    function TrendSection()
    {
        return <>
            <Box>
                <Typography 
                    variant="h4"
                    fontWeight="bold" 
                    sx={{ my: 4, px: 10 }}
                >
                    Trending Books Today
                </Typography>
                

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                
                    <Box
                        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 5, maxWidth: 1800}}
                    >
                        {trendingBooks.map((trend, index) => (
                            <BookCardComponent
                                key={trend.rank || index}
                                title={trend.title}
                                author={trend.author}
                                year={trend.year}
                                rating={trend.rating}
                                image={trend.image}
                                description={trend.description}
                                rank={trend.rank}
                            />
                        ))}
                    </Box>
                </Box>

            </Box>
        
        </>
    }
    //#endregion

    //#region CategorizedSection
    function CategorizedSection({Section, Books})
    {
        return <>
            <Box>
                <Typography 
                    variant="h4"
                    fontWeight="bold" 
                    sx={{ my: 4, px: 10 }}
                >
                    {Section}
                </Typography>
                

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                
                    <Box
                        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 5, maxWidth: 1800}}
                    >
                        {Books.map((book, index) => (
                            <BookCardComponent
                                key={book.rank || index}
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

            </Box>
        </>
    }
    //#endregion

    //#region Main
    return <>

        <Box 
            sx={{ p: 2 }}
        >
            <TrendSection />

            <Divider 
                sx={{ my: 10, mx:3 }} 
            />

            <CategorizedSection Section="Popular Fiction" Books={fictionBooks}/>

            <Divider 
                sx={{ my: 10, mx:3 }} 
            />

            <CategorizedSection Section="Science & Technology" Books={scienceTechBooks}/>

            <Divider 
                sx={{ my: 10, mx:3 }} 
            />

            <CategorizedSection Section="History & Biography" Books={historyBioBooks}/>

        </Box>
    </>
    //#endregion
}

export default TrendingPage;