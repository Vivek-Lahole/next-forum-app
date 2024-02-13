"use client";
import { CreatePost } from "@/components/CreatePost";
import { ForumCard } from "@/components/ForumCard";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession } from "next-auth/react";
import prisma from "@/prisma/PrismaClient";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const Feed = () => {
  const user = useCurrentUser();

  return (
    <ScrollArea className="h-screen w-full flex items-center justify-center rounded-md p-4">
      <div className="p-4 flex flex-col items-center">
        {user && (
          <div className="flex flex-col w-full items-center justify-center">
            <div className="w-[700px] space-y-4 m-6">
              <h2 className=" text-2xl">Hello {user?.email}</h2>
              <p className=" text-sm text-muted-foreground">
                How are you doing today? Would you like to share something with
                the community 🤗
              </p>
            </div>
            <CreatePost />
          </div>
        )}
        <div className="flex flex-col items-center justify-center space-y-2 mt-3">
          <ForumCard
            src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f350.png"
            category="ANONYMOUS"
            username="viveklahole2020@gmail.com"
            content="How are you doing today? Would you like to share something with
                the community 🤗"
            createdAt={"2024-02-12 19:03:01.06"}
          />
          <ForumCard
            src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f350.png"
            category="NON_ANONYMOUS"
            username="viveklahole2020@gmail.com"
            content="How are you doing today? Would you like to share something with
                the community 🤗"
            createdAt={"2024-02-12 19:03:01.06"}
          />
          <ForumCard
            src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f350.png"
            category="NON_ANONYMOUS"
            username="viveklahole2020@gmail.com"
            content="How are you doing today? Would you like to share something with
                the community 🤗"
            createdAt={"2024-02-12 19:03:01.06"}
          />
          <ForumCard
            src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f350.png"
            category="NON_ANONYMOUS"
            username="viveklahole2020@gmail.com"
            content="How are you doing today? Would you like to share something with
                the community 🤗"
            createdAt={"2024-02-12 19:03:01.06"}
          />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Feed;
