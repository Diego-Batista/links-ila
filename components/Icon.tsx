import { BiCheckDouble } from "react-icons/bi";
import { RiFileCopyLine } from "react-icons/ri";

type Props = {
  id: "copy" | "save";
};

export function Icon({ id }: Props) {
  return (
    <div>
      {id === "copy" ? (
        <RiFileCopyLine size={20} />
      ) : (
        <BiCheckDouble size={20} />
      )}
    </div>
  );
}
