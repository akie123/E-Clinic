import { DoctorContext } from ".";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useContext } from "react";

export default function Cancel(){
    const {upcoming,setUpcoming} = useContext(DoctorContext)

    const cap = (id) => {
        let temp = upcoming.filter(app => app.id !== id)
        setUpcoming(temp)
    }

    return (
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Patient's Name</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {upcoming.map((appointment) => {
            return (
              <tr key={appointment.id}>
                <td>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{appointment.patient.name}</p>
                  </div>
                </td>
                <td>
                  <p className="fw-formal">
                    {appointment.date.substring(0, 10)}
                  </p>
                </td>
                <td>
                  <p className="fw-formal">{appointment.time}</p>
                </td>
                <td>
                  <MDBBadge
                    color={
                      appointment.status === "active" ? "success" : "warning"
                    }
                    pill
                  >
                    {appointment.status}
                  </MDBBadge>
                </td>
                <td>
                  <button
                    type="button"
                    disabled={appointment.status === "active"}
                    className="btn btn-danger"
                    style={{ borderRadius: "10%", padding: "5%" }}
                    onClick={() => cap(appointment.id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    );
}