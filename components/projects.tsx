import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Projects = () => {
  return (
    <div className="flex h-screen" id="project">
      <div className="m-6 flex  flex-col flex-wrap justify-center">
        <div className="py-4 text-7xl font-bold text-black">Mes projets</div>
        <div className="flex flex-wrap  gap-2">
          <Sheet>
            <SheetTrigger className="group flex h-64 w-96 flex-col justify-end  rounded-2xl border shadow-sm">
              <div className="invisible justify-start p-4 group-hover:visible">
                <div className="flex">Snake</div>
                <div className="flex text-xs text-slate-400">
                  Ne vous mordez pas la queue et grandissez
                </div>
                <div className="flex gap-2 pt-2">
                  <Badge variant="secondary">Canvas</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Typescript</Badge>
                </div>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle> To do list</SheetTitle>
                <SheetDescription>
                  <ul>
                    <li> ajouter une photo</li>
                    <li> about avec ce qui est possible de faire </li>
                    <li> technologie utilisé </li>
                    <li> lien </li>
                    <li> github </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
