
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

function Dislike({ onDisike }) {
    return (
        <>
            <ThumbDownAltIcon onClick={onDisike} style={{color:"white"}} />
        </>
    )
}
export default Dislike;