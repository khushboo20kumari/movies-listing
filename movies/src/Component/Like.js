import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Like({onLike}) {
    return (
        <>
            <ThumbUpIcon onClick={onLike} style={{color:"white"}}/>
        </>
    )
}
export default Like;