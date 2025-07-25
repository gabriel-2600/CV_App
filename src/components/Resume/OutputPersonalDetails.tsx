import type { PersonalDetailsObject } from "../PersonalDetails/PersonalDetails";

interface OutputPersonalDetailsProps {
  details: PersonalDetailsObject;
}

function OutputPersonalDetails({ details }: OutputPersonalDetailsProps) {
  return (
    <div>
      <div>
        <p>{details.fullName}</p>
      </div>

      <div>
        <p>{details.email}</p>
      </div>

      <div>
        <p>{details.phoneNumber}</p>
      </div>

      <div>
        <p> {details.address}</p>
      </div>
    </div>
  );
}

export default OutputPersonalDetails;
