import EventCard from "./EventCard"; // Import EventCard component
import { event } from "../../Data/testevent.json"; // Import event data
import EventBar from "./css/EventBar.module.css";

function EventsPage() {
  return (
    <>
      <img
              loading="lazy"
              src="https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/660161ab78f1fcc5d14a746d_double-arrow.png"
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
