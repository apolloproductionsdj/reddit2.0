import { useSession } from "next-auth/react";
import React from "react";

function PostBox() {
  const { data: session } = useSession();

  return (
    <form>
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <input
          disabled={!session}
          className="bg-gray-50 p02 pl-5 outline-none rounded-md flex-1"
          type="text"
          placeholder={
            session ? "Create a post by entering a title!" : "Sign in to post"
          }
        />
      </div>
    </form>
  );
}

export default PostBox;
