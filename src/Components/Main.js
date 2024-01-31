import MoreBtn from "./MoreBtn"
import ListRestosCard from "./RestoCard"

const Main = () => {
  return (
    <div>
      <h2>All Restaurant</h2>
      <div className="container">
        < ListRestosCard/>
      </div>
      <MoreBtn />
    </div>
  )
}

export default Main