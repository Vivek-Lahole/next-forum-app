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
import { Eye, EyeOff, GithubIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Separator } from "@radix-ui/react-separator";

const loginFormSchema = z.object({
  username: z
    .string({
      required_error: "username is required!",
      invalid_type_error: "username must be a string",
    })
    .min(2, {
      message: "username should have at least 2 characters.",
    })
    .max(30, {
      message: "username cannot have more than 20 characters.",
    }),
  password: z
    .string()
    .min(6, {
      message: "password is required.",
    })
    .max(20, {
      message: "password is required.",
    }),
});

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function loginSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  return (
    <div className="">
      <Card className="bg-secondary">
        <CardHeader className="mb-6">
          <CardTitle className="flex flex-col items-center justify-center space-y-2">
            <p className="text-primary/30 text-sm uppercase font-medium">
              Welcome Back
            </p>
            <p>Log into your account</p>
          </CardTitle>
        </CardHeader>
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(loginSubmit)}>
            <div className="space-y-2">
              <CardContent>
                <FormField
                  control={loginForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center justify-between space-x-8">
                        <label className="font-normal">Email or Username</label>
                        <p className="text-primary/20 font-normal hover:text-primary/50 text-sm">
                          Forget Password ?
                        </p>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email or username"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal">password</FormLabel>
                      <FormControl>
                        <div className="flex items-center space-x-1">
                          <Input
                            placeholder="Enter your Password"
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
                  variant={"primary"}
                  className="w-full "
                  disabled={isPending}
                >
                  Login
                </Button>
              </CardFooter>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default SignInForm;
