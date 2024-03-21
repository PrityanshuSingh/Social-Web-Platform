import EventCard from "./EventCard"; // Import EventCard component
import { event } from "../../Data/testevent.json"; // Import event data
import EventBar from "./css/EventBar.module.css";

function EventsPage() {
  return (
    <>
      <img
              loading="lazy"
              src="https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/65f9c99cd91240b6d202dced_circle-arrow-right-solid%20(1).svg"
              className={EventBar.eventIcon}
              alt=""
      />
      <main className={EventBar.eventsContainer}>
        <section className={EventBar.eventsSection}>
          <h1 className={EventBar.eventsTitle}>Events</h1>
          <div className={EventBar.eventsListWrapper}>
            <div className={EventBar.eventsList}>
              {event.map((event) => (
                <EventCard key={event.id} event={event} /> // Pass event data as prop
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default EventsPage;
