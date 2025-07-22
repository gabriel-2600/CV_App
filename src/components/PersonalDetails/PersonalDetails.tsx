import { useState } from "react";
import InputPersonalDetails from "./InputPersonalDetails";
import OutputPersonalDetails from "./OutputPersonalDetails";

interface PersonalDetailsObject {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

function PersonalDetails() {
  const [details, setDetails] = useState<PersonalDetailsObject>({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  function handleChange(key: keyof PersonalDetailsObject, value: string) {
    setDetails((prevDetails) => ({ ...prevDetails, [key]: value }));
  }

  return (
    <div>
      <h2>Personal Details</h2>

      <InputPersonalDetails details={details} handleChange={handleChange} />

      <OutputPersonalDetails details={details} />
    </div>
  );
}

export default PersonalDetails;
export type { PersonalDetailsObject };
