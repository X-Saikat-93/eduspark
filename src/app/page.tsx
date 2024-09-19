import DropdownMenuRadioGroupDemo from "@/components/dropdown-check";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>

      <div className=" flex w-full justify-between">

        <Button>
          check
        </Button>

        <DropdownMenuRadioGroupDemo/>
</div>
    </>
  );
}
