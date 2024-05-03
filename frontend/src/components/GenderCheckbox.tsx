interface GenderCheckboxProps {
  onCheckboxChange: (gender: string) => void;
  selectedGenre: string | undefined;
}

export default function GenderCheckbox({
  selectedGenre,
  onCheckboxChange,
}: GenderCheckboxProps) {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGenre === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-300">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary border-gray-300"
            checked={selectedGenre === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGenre === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-300">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary border-gray-300"
            checked={selectedGenre === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}
