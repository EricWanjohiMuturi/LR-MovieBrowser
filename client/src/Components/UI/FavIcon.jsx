import { IconButton } from "@material-tailwind/react";
 
export function FavIcon() {
    function favorite(){
        alert("Added to favorites")
    }
  return (
    <div className="flex items-center gap-4">
      <IconButton variant="gradient" className="rounded-full bg-white absolute top-1 left-2" onClick={favorite}>
        <i className="fas fa-heart" />
      </IconButton>
    </div>
  );
}