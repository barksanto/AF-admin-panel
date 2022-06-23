import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1>Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          
        </div>
      </div>
    </div>
  )
}

export default Featured