import React, {useState} from "react";

function EventObject() {
    // event is initialised state variable, setEvent is a mutator that allows updating state variable.
    const [event, setEvent] = useState(null);
    const handleClick = (e) => {
        // removes the view property and replaces the target property to avoid circular references,
        // and then stores the event object in variable event.
        e.target = e.target.outerHTML;
        delete e.view;
        setEvent(e);
    }
    return (
        <>
            <h2>Event Object</h2>
            <button id="event-button" onClick={(e) => handleClick(e)}
                    className="btn btn-light border">Display Event Object</button>
            <pre>{JSON.stringify(event, null, 2)}</pre>
        </>
    );
}

export default EventObject;