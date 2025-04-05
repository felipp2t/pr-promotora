"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Email invalido"),
  password: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: FormSchema) => console.log(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name} className="w-fit">
                E-mail
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  className="dark:bg-input/30 bg-white"
                  placeholder="example@example.com"
                  autoComplete="off"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name} className="w-fit">
                Senha
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    id={field.name}
                    className="dark:bg-input/30 bg-white"
                    type={showPassword ? "text" : "password"}
                    autoComplete="off"
                  />

                  {showPassword ? (
                    <Eye
                      className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <EyeOff
                      className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="text-background dark:text-foreground mt-2 w-full"
        >
          Entrar
        </Button>
      </form>
    </Form>
  );
};
