import React from "react";
import { Input, Button } from "@material-tailwind/react";
 
export function SearchForm() {
  /* const [email, setEmail] = React.useState(""); */
  const onChange = ({ target }) => setEmail(target.value);

  const handleSearch = () => {

  }
 
  return (
    <div className="relative w-auto max-w-6xl justify-center my-10">
        <form onSubmit={handleSearch} className="flex w-auto gap-2 Justify-center">
            {/* <Input
                type="email"
                label="Search Movies"
                size="lg"
                value={email}
                onChange={onChange}
              
                
            /> */}
            <Input 
            size="md" 
            label="Search for movies..." 
            onChange={onChange}
            />
            <Button
                size="md"
                variant="gradient"
                color="black"
                className=" rounded"
            >
                Search
            </Button>
        </form>
    </div>
  );
}