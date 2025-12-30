import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
 
export default function Book() {
  const [bookName, setBookName] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
 
  const handleSearch = async (e) => {
    e.preventDefault();
 
    if (!bookName.trim()) {
      setError("Please enter a book name");
      return;
    }
 
    setLoading(true);
    setError("");
    setSearched(true);
 
    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: bookName.trim() }),
      });
 
      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }
 
      const data = await response.json();
      setRecommendations(data);
    } catch (err) {
      setError(
        err.message || "An error occurred while fetching recommendations"
      );
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Search Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 3, fontWeight: "bold" }}
        >
          Book Recommendations
        </Typography>
 
        <Box
          component="form"
          onSubmit={handleSearch}
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter a book name..."
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            variant="outlined"
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f5f5f5",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            sx={{
              px: 4,
              height: "56px",
              whiteSpace: "nowrap",
            }}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </Box>
      </Box>
 
      {/* Error Message */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
 
      {/* Loading State */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Box>
      )}
 
      {/* No Results Message */}
      {searched && !loading && recommendations.length === 0 && !error && (
        <Alert severity="info" sx={{ mb: 3 }}>
          No recommendations found. Try searching for a different book.
        </Alert>
      )}
 
      {/* Recommendations Grid */}
      <Grid container spacing={3}>
        {recommendations.map((book, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              {/* Book Thumbnail */}
              {book.thumbnail && (
                <CardMedia
                  component="img"
                  height="200"
                  image={book.thumbnail}
                  alt={book.title}
                  sx={{
                    objectFit: "cover",
                    backgroundColor: "#e0e0e0",
                  }}
                />
              )}
 
              <CardContent sx={{ flexGrow: 1 }}>
                {/* Title */}
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    minHeight: "56px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {book.title}
                </Typography>
 
                {/* Authors */}
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 1, fontStyle: "italic" }}
                >
                  by {book.authors}
                </Typography>
 
                {/* Category */}
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ mb: 1, fontWeight: 500 }}
                >
                  {book.categories}
                </Typography>
 
                {/* Published Year */}
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 1 }}
                >
                  Published: {book.published_year}
                </Typography>
 
                {/* Rating */}
                <Typography
                  variant="body2"
                  color="success.main"
                  sx={{ mb: 1, fontWeight: "bold" }}
                >
                  ⭐ {book.average_rating.toFixed(2)}/5.0
                </Typography>
 
                {/* Similarity Score */}
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{
                    display: "block",
                    backgroundColor: "#f0f0f0",
                    p: 1,
                    borderRadius: 1,
                    mt: 2,
                  }}
                >
                  Relevance: {(book["Similarity Score"] * 100).toFixed(1)}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}