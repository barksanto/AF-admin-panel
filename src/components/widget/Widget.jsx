import "./widget.scss"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import PeopleIcon from "@mui/icons-material/People"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"

const Widget = ({ type }) => {
  let data

  // temp data
  const amount = 100
  const diff = 20

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PeopleIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "white",
            }}
          />
        ),
      }
      break
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "white",
            }}
          />
        ),
      }
      break
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View earnings",
        icon: (
          <MonetizationOnIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "white",
            }}
          />
        ),
      }
      break
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "white",
            }}
          />
        ),
      }
      break
    default:
      break
  }
  
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowDropUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
