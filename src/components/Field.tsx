import { Field } from "../Layout.types";
import { Label } from "./ui/label";

export const FieldComponent = ({
  editable,
  label,
  labelPosition,
  //name,
  value,
}: Field) => {
  return (
    <div className="p-4 pb-0">
      <Label className={`${labelPosition === "above" ? "block" : "pr-3"}`}>
        {label}:
      </Label>
      <p className="inline-block pr-3">{value}</p>
      {editable === true && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-5 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      )}
    </div>
  );
};
