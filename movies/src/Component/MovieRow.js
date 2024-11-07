import { Grid, Container, Typography, CardMedia, CardContent } from '@mui/material';
function MovieRow({ moviesRowData }) {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <>

            <Grid container spacing={4} >
                <Grid item sx={12} xs={12} lg={4}>
                    <CardMedia
                        component="img"
                        sx={{height:"300px"}}
                        image={moviesRowData.poster_path ? `${baseImageUrl}${moviesRowData.poster_path}` : 'defaultImage.jpg'}
                        alt={moviesRowData.original_title}
                    />
                </Grid>
                <Grid item sx={12} xs={12} lg={8}>
                    <Typography style={{ color: "white" ,fontSize:"30px",fontWeight:"bold"}} variant="h4" component="div" gutterBottom>
                        {moviesRowData.original_title}
                    </Typography>
                    <Typography sx={{mt:3}} style={{ color: "white",fontSize:"16px",letterSpacing:"1px" }} variant="body2" color="text.secondary">
                        {moviesRowData.overview || 'No description available.'}
                    </Typography>
                </Grid>
            </Grid>

        </>
    )
}
export default MovieRow;