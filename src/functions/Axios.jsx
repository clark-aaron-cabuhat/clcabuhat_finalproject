import axios from "axios";

//#region fetchBookDescription

    const fetchBookDescription = async (url) => {
        try 
        {
            const response = await axios.get(url);
            const data = response.data;

            if (typeof data.description === "string") {
            return data.description;
            }
            if (typeof data.description === "object" && data.description.value) {
            return data.description.value;
            }

            return "No description available.";
        } 
        catch (error) 
        {
            console.warn("Failed to fetch description:", error);
            return "No description available.";
        }
    };

//#endregion

//#region Top 12 Trending
    export const fetchTrendingBooks = async () => 
    {
        try 
        {
            const response = await axios.get("https://openlibrary.org/trending/daily.json");

            const books = await Promise.all(
                response.data.works.slice(0, 12).map(async (book, index) => {
                    const description = await fetchBookDescription(
                        `https://openlibrary.org${book.key}.json`
                    );

                    return {
                        title: book.title,
                        author: book.author_name?.[0] || "Unknown",
                        year: book.first_publish_year,
                        image: book.cover_i
                            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                            : "https://via.placeholder.com/150x200?text=No+Cover",
                        description,
                        rating: (Math.random() * 5).toFixed(1),
                        rank: index + 1,
                    };
                })
            );

            return books;
        } 
        catch (error) 
        {
            console.error("Error fetching trending books:", error);
            return [];
        }
    };
//#endregion

//#region Categorized Books

    export const fetchCategorizedBooks = async (category, limit) => 
    {
        try
        {
            const response = await axios.get(`https://openlibrary.org/search.json?subject=${category}&limit=${limit}`);

            const books = await Promise.all(
                response.data.docs.map(async (book) => {
                    const description = await fetchBookDescription(
                        `https://openlibrary.org${book.key}.json`
                    );

                    return {
                        title: book.title,
                        author: book.author_name?.[0] || "Unknown",
                        year: book.first_publish_year,
                        image: book.cover_i
                            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                            : "https://via.placeholder.com/150x200?text=No+Cover",
                        description,
                        rating: (Math.random() * 5).toFixed(1),
                    };
                })
            );
            return books;
        }
        catch (error)
        {
            console.warn("Failed to fetch fiction books:", error);
            return [];
        }
    }

//#endregion

//#region Browse

    export const fetchSearchQuery = async (query) => 
    {
        try 
        {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=24`);

            const books = await Promise.all(
                response.data.docs.map(async (book) => {
                    const description = await fetchBookDescription(
                        `https://openlibrary.org${book.key}.json`
                    );

                    return {
                        title: book.title,
                        author: book.author_name?.[0] || "Unknown",
                        year: book.first_publish_year,
                        image: book.cover_i
                            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                            : "https://via.placeholder.com/150x200?text=No+Cover",
                        description,
                        rating: (Math.random() * 5).toFixed(1),
                    };
                })
            );
            return books;
        }
        catch (error)
        {
            console.warn();
            return [];
        }
    }

//#endregion