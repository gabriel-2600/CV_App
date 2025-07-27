import type { Dispatch, SetStateAction } from "react";
import InputPersonalDetails from "./InputPersonalDetails";

interface PersonalDetailsObject {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

interface PersonalDetailsProps {
  details: PersonalDetailsObject;
  setDetails: Dispatch<SetStateAction<PersonalDetailsObject>>;
}

function PersonalDetails({ details, setDetails }: PersonalDetailsProps) {
  function handleChange(key: keyof PersonalDetailsObject, value: string) {
    setDetails((prevDetails: PersonalDetailsObject) => ({
      ...prevDetails,
      [key]: value,
    }));
  }

  return (
    <div className="bg-white p-5 rounded-lg  ">
      <h2 className="font-bold text-[25px]">Personal Details</h2>

      <InputPersonalDetails details={details} handleChange={handleChange} />
    </div>
  );
}

export default PersonalDetails;
export type { PersonalDetailsObject };
