import { BiCheckDouble } from "react-icons/bi";
import { RiFileCopyLine } from "react-icons/ri";

type Props = {
  id: "copy" | "save";
};

export function Icon({ id }: Props) {
  return (
    <div>
      {id === "copy" ? (
        <RiFileCopyLine className="w-5 h-5 md:w-7 md:h-7" />
      ) : (
        <BiCheckDouble className="w-5 h-5 md:w-7 md:h-7" />
      )}
    </div>
  );
}
