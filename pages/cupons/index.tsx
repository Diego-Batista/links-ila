import { BackButton } from "../components/BackButton";
import { CardConsult } from "../components/CardConsult";

export default function Cupons() {
    return (
        <div className="h-screen w-screen dark:bg-[#3D1549] bg-[#D7BBAC] overflow-hidden">
            
            <div className="absolute top-2 left-2 z-50">
                <BackButton />
            </div>

            <CardConsult />
        </div>
    )
}