import DeleteIcon from '@mui/icons-material/Delete';

function DeleteMovieRow({ onDelete }) {
    return (
        <>
            <DeleteIcon onClick={onDelete} sx={{mt:{lg:20,sm:3},color:"white"}}/>
        </>
    )
}
export default DeleteMovieRow;