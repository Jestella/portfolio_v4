import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/ui/Navbar";
import Button from "../components/ui/Button";

function Lab() {
  return (
    <div className="lab">
      <Navbar />
      <div className="lab-container">
        <h1>Coming Soon...💡</h1>

        <Link href="/">
          <Button>Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default Lab;
