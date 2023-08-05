import { Container } from "react-bootstrap";
import EventsAll from "../events/EventsAll";
import LocationPage from "../locations/LocationPage";

const Home = () => {
   
    return (
        <div>
          <Container>
            <h1 >Top Selling on TicketPRO</h1>

            {/* event carousel */}
            <EventsAll />
           
            
            </Container>
        </div>
    );
};

export default Home;
