import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="relative h-10 w-20">
      <Image
        objectFit="contain"
        src="https://links.papareact.com/fqy"
        layout="fill"
      />
    </div>
  );
}

export default Header;
