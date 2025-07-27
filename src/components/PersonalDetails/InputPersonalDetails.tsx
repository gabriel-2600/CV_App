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
      <div className="py-[5px]">
        <label htmlFor="full-name">Full Name</label>
        <input
          className="border-1 border-solid"
          id="full-name"
          type="text"
          value={details.fullName}
          onChange={(event) => handleChange("fullName", event.target.value)}
        />
      </div>

      <div className="py-[5px]">
        <label htmlFor="email">Email</label>
        <input
          className="border-1 border-solid"
          id="email"
          type="text"
          value={details.email}
          onChange={(event) => handleChange("email", event.target.value)}
        />
      </div>

      <div className="py-[5px]">
        <label htmlFor="phone-number">Phone Number</label>
        <input
          className="border-1 border-solid"
          id="phone-number"
          type="text"
          value={details.phoneNumber}
          onChange={(event) => handleChange("phoneNumber", event.target.value)}
        />
      </div>

      <div className="py-[5px]">
        <label htmlFor="address">Address</label>
        <input
          className="border-1 border-solid"
          id="address"
          type="text"
          value={details.address}
          onChange={(event) => handleChange("address", event.target.value)}
        />
      </div>
    </form>
  );
}

export default InputPersonalDetails;
