"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState, useTransition } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const signupFormSchema = z.object({
  username: z
    .string({
      required_error: "username is required!",
      invalid_type_error: "username must be a string",
    })
    .min(2, {
      message: "username should have at least 2 characters.",
    })
    .max(20, {
      message: "username cannot have more than 20 characters.",
    }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, {
      message: "password should have at least 6 characters.",
    })
    .max(20, {
      message: "password cannot have more than 20 characters.",
    }),
});

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const signupForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function signupSubmit(values: z.infer<typeof signupFormSchema>) {
    console.log(values);
  }

  return (
    <Card className="bg-secondary">
      <CardHeader className="mb-6">
        <CardTitle className="flex flex-col items-center justify-center space-y-2">
          <p className="text-primary/30 text-sm font-semibold">Sign Up</p>
          <p>Create an account to continue</p>
        </CardTitle>
      </CardHeader>
      <Form {...signupForm}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            signupForm.handleSubmit(signupSubmit)();
          }}
        >
          <div className="space-y-2">
            <CardContent>
              <FormField
                control={signupForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signupForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Choose a preferred username"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signupForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">password</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-1">
                        <Input
                          placeholder="Choose a strong Password"
                          {...field}
                          type={showPassword ? "text" : "password"}
                          disabled={isPending}
                        />
                        <Button
                          type="button"
                          size={"icon"}
                          variant={"ghost"}
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                          disabled={isPending}
                        >
                          {showPassword && <Eye />}
                          {!showPassword && <EyeOff />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full"
                disabled={isPending}
                variant={"primary"}
              >
                Create Account
              </Button>
            </CardFooter>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default SignUpForm;
