import type { PersonalDetailsObject } from "../PersonalDetails/PersonalDetails";

interface OutputPersonalDetailsProps {
  details: PersonalDetailsObject;
}

function OutputPersonalDetails({ details }: OutputPersonalDetailsProps) {
  return (
    <div>
      <p className="text-[40px] text-center">{details.fullName}</p>

      <div className="flex justify-center items-center  gap-[20px] text-[16px]">
        <li className="list-none"> {details.address}</li>
        <li>{details.phoneNumber}</li>
        <li>{details.email}</li>
      </div>
    </div>
  );
}

export default OutputPersonalDetails;
