import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </thead>
        <tbody>
          <tr>
            <td className="time">8am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event
              event="Programming"
              color="blue"
              location="Computer Center"
            />
            <td></td>
            <Event
              event="Programming"
              color="blue"
              location="Computer Center"
            />
            <td></td>
          </tr>
          <tr>
            <td className="time">9am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10am</td>
            <td></td>
            <td></td>
            <Event event="History" color="orange" location="Humanities Hall" />
            <td></td>
            <Event event="History" color="orange" location="Humanities Hall" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11am</td>
            <td></td>
            <Event event="Physics" color="green" location="Science Street" />
            <td></td>
            <Event event="Physics" color="green" location="Science Street" />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12pm</td>
            <td></td>
            <Event event="English" color="red" location="Humanities Hall" />
            <td></td>
            <td></td>
            <Event event="English" color="red" location="Humanities Hall" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
