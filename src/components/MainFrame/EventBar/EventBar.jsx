import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import { event } from "../../../Data/testevent.json";
import EventBar from "./styles/EventBar.module.css";

function EventsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleEventBar = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 960);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <img
          loading="lazy"
          src="https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/660161ab78f1fcc5d14a746d_double-arrow.png"
          className={`${EventBar.eventIcon} ${isOpen ? EventBar.open : ""}`}
          alt=""
          onClick={toggleEventBar}
        />
      )}
      <main
        className={`${EventBar.eventsContainer} ${isOpen ? EventBar.open : ""} ${
          isMobile ? EventBar.mobile : ""
        }`}
      >
        <section className={EventBar.eventsSection}>
          <h1 className={EventBar.eventsTitle}>Events</h1>
          <div className={EventBar.eventsListWrapper}>
            <div className={EventBar.eventsList}>
              {event.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default EventsPage;