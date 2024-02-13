"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, MoreHorizontal, Trash } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

export function ForumCard() {
  const [chosenEmoji, setChosenEmoji] = React.useState(null);

  const onEmojiClick = (event: any, emojiObject: any) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <Card className="bg-secondary">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Trash className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-[660px] h-[107px] bg-background rounded-md flex items-center justify-between space-x-2">
          <div className="h-[48px] w-[48px] flex items-center justify-center m-3 rounded-full bg-secondary ">
            <Avatar className="h-[18px] w-[18px]">
              <AvatarImage
                src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f496.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <ScrollArea className="h-full w-full text-muted-foreground text-xs">
            Jokester began sneaking into the castle in the middle of the night
            and leaving jokes all over the place: under the king's pillow, in
          </ScrollArea>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex space-x-1 items-center">
          <MessageSquare className="text-muted-foreground h-[20px] w-[20px]" />
          <span className="text-xs text-muted-foreground">24 Comments</span>
        </div>
      </CardFooter>
    </Card>
  );
}
