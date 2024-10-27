"use client";
import app from "@/firebase";
import Wrapper from "@/layout/Wrapper/Wrapper";
import { Box, Button, Container } from "@mui/material";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const dashboard = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.log("Logout error", error);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          Welcome to Dashboard {user && user?.displayName}, You can logout now{" "}
          <Button
            variant="contained"
            sx={{ backgroundColor: "red" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default dashboard;
