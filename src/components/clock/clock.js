import { useState, useEffect } from "react";

const Clock = props => {
    let [date, setDate] = useState(new Date());

    function tick() {
        setDate(new Date());
    }

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);

        return () => clearInterval(timerID)
    },[]);

    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    );
}
//add test comment
export default Clock;
