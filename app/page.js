import BasketballCard from "@/components/BasketballCard"

const Home = ()=>{
  return(
    <BasketballCard
    name="Michael Jordan"
    image="./Jordan.jpg"
    position="Forward"
    stats={{pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5}}
    />
  )
}


export default Home