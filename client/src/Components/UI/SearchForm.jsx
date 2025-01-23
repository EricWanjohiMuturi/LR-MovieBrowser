import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
 
export function SearchForm() {
  /* const [email, setEmail] = React.useState(""); */
  const [searchQuery, setSearchQuery] = useState("");
  

  const handleSearch = (e) => {
    alert(searchQuery);
    e.preventDefault()
    setSearchQuery("");
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
                size="md"
                variant="gradient"
                color="black"
                className=" rounded"
                type="submit"
            >
                Search
            </Button>
        </form>
    </div>
  );
}