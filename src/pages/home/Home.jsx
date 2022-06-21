import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="home">
      {/* <h1 className="title">AF Admin Panel</h1> */}
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  )
}

export default Home