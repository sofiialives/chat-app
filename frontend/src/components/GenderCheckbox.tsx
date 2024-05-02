export default function GenderCheckbox() {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-300">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary border-gray-300"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-300">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary border-gray-300"
          />
        </label>
      </div>
    </div>
  );
}
