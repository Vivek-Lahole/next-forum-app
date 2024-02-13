"use client";
import { CreatePost } from "@/components/CreatePost";
import { ForumCard } from "@/components/ForumCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { DotLoader } from "react-spinners";

interface Post {
  content: string;
  src: string;
  category: "NON_ANONYMOUS" | "ANONYMOUS";
  username: string;
  createdAt: string;
  userId: string | null;
  updatedAt: string;
}

const NonAnonymous = () => {
  const user = useCurrentUser();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/feed")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log("Error Fetching Posts", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <DotLoader color="#4A96FF" size={60} speedMultiplier={1} />
      </div>
    );
  }

  return (
    <ScrollArea className="h-screen w-full flex items-center justify-center rounded-md mt-4">
      <div className=" flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          {posts.map((item: Post) => (
            <ForumCard
              src={item.src}
              category={item.category}
              username={item.username}
              content={item.content}
              createdAt={item.createdAt}
            />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default NonAnonymous;
