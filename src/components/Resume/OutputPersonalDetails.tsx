import type { PersonalDetailsObject } from "../PersonalDetails/PersonalDetails";

interface OutputPersonalDetailsProps {
  details: PersonalDetailsObject;
}

function OutputPersonalDetails({ details }: OutputPersonalDetailsProps) {
  return (
    <div>
      <p className="text-[40px] text-center">{details.fullName}</p>

      <div className="flex justify-center items-center gap-[10px] text-[16px]">
        <p> {details.address}</p>•<p>{details.phoneNumber}</p>•
        <p>{details.email}</p>
      </div>
    </div>
  );
}

export default OutputPersonalDetails;
