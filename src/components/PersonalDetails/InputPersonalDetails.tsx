import type { PersonalDetailsObject } from "./PersonalDetails";

interface InputPersonalDetailsProps {
  details: PersonalDetailsObject;
  handleChange: (key: keyof PersonalDetailsObject, value: string) => void;
}

function InputPersonalDetails({
  details,
  handleChange,
}: InputPersonalDetailsProps) {
  return (
    <form>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          value={details.fullName}
          onChange={(event) => handleChange("fullName", event.target.value)}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="text"
          value={details.email}
          onChange={(event) => handleChange("email", event.target.value)}
        />
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="number"
          value={details.phoneNumber}
          onChange={(event) => handleChange("phoneNumber", event.target.value)}
        />
      </div>

      <div>
        <label>Address</label>
        <input
          type="text"
          value={details.address}
          onChange={(event) => handleChange("address", event.target.value)}
        />
      </div>
    </form>
  );
}

export default InputPersonalDetails;
