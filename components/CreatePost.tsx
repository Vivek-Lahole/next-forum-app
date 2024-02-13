"use client";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

export function CreatePost() {
  const [isVisible, setVisible] = useState(false);

  return (
    <Card className=" bg-secondary">
      <CardHeader className="flex justify-between">
        <div className="flex space-x-6">
          <Avatar className="h-[44px] w-[44px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center flex-1">
            <CardTitle className="text-sm font-normal leading-none tracking-tight">
              Theresa Web
            </CardTitle>
            <CardDescription>5 min ago</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-[660px] h-[78px] bg-background rounded-md flex items-center space-x-2">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="h-[48px] w-[48px] flex items-center justify-center m-3 rounded-full bg-secondary"
            onClick={() => {
              setVisible(!isVisible);
            }}
          >
            <Avatar className="h-[18px] w-[18px]">
              <AvatarImage
                src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f350.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
          <textarea
            className="w-full h-full bg-background text-xs text-muted-foreground px-3 py-2 outline-none"
            placeholder="How are you feeling today ?"
            style={{ lineHeight: "50px" }} // Adjust line height to match the height of the textarea
          />
          {isVisible && (
            <div className="absolute top-[25%] left-0 z-50">
              <EmojiPicker
                height={400}
                width={800}
                onEmojiClick={(emogi) => {
                  setVisible(!isVisible);
                  console.log(emogi);
                }}
              />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-end">
          <Button className="w-[111px] h-[43px]" variant={"primary"}>
            Post
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
