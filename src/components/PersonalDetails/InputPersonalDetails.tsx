import type { PersonalDetailsObject } from "./PersonalDetails";

interface InputPersonalDetailsProps {
  details: PersonalDetailsObject;
  handleChange: (key: keyof PersonalDetailsObject, value: string) => void;
}

function InputPersonalDetails({
  details,
  handleChange,
}: InputPersonalDetailsProps) {
  const divInputContainerStyling: string = "py-[5px] flex flex-col";
  const inputStyling: string =
    "bg-[#EBEDF3] border-solid rounded-sm p-2 text-[14px]";

  return (
    <form>
      <div className={divInputContainerStyling}>
        <label htmlFor="full-name">Full Name</label>
        <input
          className={inputStyling}
          id="full-name"
          type="text"
          value={details.fullName}
          onChange={(event) => handleChange("fullName", event.target.value)}
        />
      </div>

      <div className={divInputContainerStyling}>
        <label htmlFor="address">Address</label>
        <input
          className={inputStyling}
          id="address"
          type="text"
          value={details.address}
          onChange={(event) => handleChange("address", event.target.value)}
        />
      </div>

      <div className={divInputContainerStyling}>
        <label htmlFor="phone-number">Phone Number</label>
        <input
          className={inputStyling}
          id="phone-number"
          type="text"
          value={details.phoneNumber}
          onChange={(event) => handleChange("phoneNumber", event.target.value)}
        />
      </div>

      <div className={divInputContainerStyling}>
        <label htmlFor="email">Email</label>
        <input
          className={inputStyling}
          id="email"
          type="text"
          value={details.email}
          onChange={(event) => handleChange("email", event.target.value)}
        />
      </div>
    </form>
  );
}

export default InputPersonalDetails;
