import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Box, Button, Container, Typography } from "@mui/material";
import Wrapper from "@/layout/Wrapper/Wrapper";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import app from "@/firebase";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Error in sign in", error?.message);
    }
  };

  const signInWithFacebook = async()=>{
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      router.push("/dashboard")
  } catch (error: any) {
    console.log("Error in sign in", error?.message)
  }
}

  return (
    <Wrapper>
      <Container>
        <Typography textAlign={"center"} fontWeight={'bold'} variant="h2">FireBase Auth</Typography>
        {user ? (
          <Box>
            You are logged in!! {user ? user?.displayName : "Sample"} Go to{" "}<Link href={'/dashboard'}>Dashboard</Link>
            {/* <Link href={`${router.push("/dashboard")}`}>Dashboard</Link>{" "} */}
          </Box>
        ) : (
          <div>
            <Box textAlign={"center"}>
              {/* Please login with Google. */}
              <Button variant="contained" color="inherit" onClick={signInWithGoogle}>
                Login with Google
              </Button>
            </Box>
            <Box textAlign={"center"} my={3}>
            <Button variant="contained"  onClick={signInWithFacebook}>
                Login with Facebook
              </Button>
            </Box>
          </div>
        )}
      </Container>
    </Wrapper>
  );
}
