
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SignupValidation } from "@/lib/validation";
import { Label } from '@/components/ui/label';

const SignUpForm = () => {

  // const { toast } = useToast();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })
  // const defaultModel = {
  //   mutateAsync: {},
  //   isPending: false
  // }
  // const {mutateAsync: createUserAccount, isPending: isCreatingAccount } = defaultModel;
  // const {mutateAsync: signInAccount, isPending: isSigningIn} = defaultModel;

  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    console.log('Form submitted')
    // const newUser = await createUserAccount(values);
    // if(!newUser){
    //   return toast({
    //     title: "Sign up failed. Please try again.",
    //   })
    // }
    // const session = await signInAccount({
    //   email: values.email,
    //   password: values.password
    // })

    // if(!session){
    //   return toast({title: 'Sign in failed. Please try again.'})
    // }
    // const isLoggedIn = await checkAuthUser();

    // if(isLoggedIn){
    //   form.reset();
    //   navigate('/');
    // } else {
    //   return toast({ title: 'Sign up  failed, Please try again.'})
    // }
  }

  return (
    <>
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Register</h1>
          <p className="text-balance text-muted-foreground">
            Create an account to sign in to your account
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Rob"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label>Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Rob Martin"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="rmartin@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label>Password</Label>
            </div>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label>Confirm Password</Label>
            </div>
            <Input id="confirm-password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}

          <Link
            to="/sign-in"
          >
            Sign in
          </Link>
        </div>
      </div>
    </>
  )
}

export default SignUpForm
