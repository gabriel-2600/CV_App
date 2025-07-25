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
    <div>
      <h2>Personal Details</h2>

      <InputPersonalDetails details={details} handleChange={handleChange} />
    </div>
  );
}

export default PersonalDetails;
export type { PersonalDetailsObject };
