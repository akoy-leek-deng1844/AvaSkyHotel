import SingleRoomDisplay from "./SingleRoomDisplay"

const RoomsDisplay = () => {
  return (
    <section className="hotel2 hotel-rooms">
        <h1 id="rb">Ava Sky Rooms</h1>
        <article>
            <p>Leeks hotel has got spacious and 1 bedrooms of all types. Choose from a wide range based on your size, budget and preferences.</p>
            <p>Get an accomodation you will not get anywhere else.</p>
        </article>
        <SingleRoomDisplay/>       
    </section>
  )
}
export default RoomsDisplay