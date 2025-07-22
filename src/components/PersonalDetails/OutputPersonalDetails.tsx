import type { PersonalDetailsObject } from "./PersonalDetails";

interface OutputPersonalDetailsProps {
  details: PersonalDetailsObject;
}

function OutputPersonalDetails({ details }: OutputPersonalDetailsProps) {
  return (
    <div>
      <div>
        <p>Full Name: {details.fullName}</p>
      </div>

      <div>
        <p>Email: {details.email}</p>
      </div>

      <div>
        <p>Phone Number: {details.phoneNumber}</p>
      </div>

      <div>
        <p>Address: {details.address}</p>
      </div>
    </div>
  );
}

export default OutputPersonalDetails;
