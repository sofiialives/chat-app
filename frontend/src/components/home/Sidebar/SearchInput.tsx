import TextField from "../../reusable/TextField";
import Button from "../../reusable/Button";
import { IoSearchSharp } from "react-icons/io5";

interface SearchInputProps {}

export default function SearchInput({}: SearchInputProps) {
  return (
    <form className="flex items-center gap-2">
      <TextField placeholder="Search..." variant="sidebar" />
      <Button type="submit" variant="sidebar">
        <IoSearchSharp className="w-4 h-4 tablet:w-6 tablet:h-6" />
      </Button>
    </form>
  );
}
