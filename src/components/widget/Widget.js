import "./widget.scss"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import PeopleIcon from "@mui/icons-material/People"

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">438</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className="percentage">
          <ArrowDropUpIcon />
          20%
        </div>
        <PeopleIcon className="icon" />
      </div>
    </div>
  )
}

export default Widget
