"use client";
import { CreatePost } from "@/components/CreatePost";
import { ForumCard } from "@/components/ForumCard";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession } from "next-auth/react";

const Feed = () => {
  const { data: session } = useSession();

  return (
    <ScrollArea className="h-screen w-full flex items-center justify-center rounded-md p-4">
      <div className="p-4 flex flex-col items-center">
        {session && (
          <div className="flex flex-col w-full items-center justify-center">
            <div className="w-[700px] space-y-4 m-6">
              <h2 className=" text-2xl">Hello Jane</h2>
              <p className=" text-sm text-muted-foreground">
                How are you doing today? Would you like to share something with
                the community 🤗
              </p>
            </div>
            <CreatePost />
          </div>
        )}
        <div className="flex flex-col items-center justify-center space-y-2 mt-3">
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Feed;
