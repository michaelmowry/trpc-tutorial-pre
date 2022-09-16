import type { NextPage } from "next";
import { useUserContext } from "../context/user.context";
import { trpc } from "../utils/trpc";
import Link from "next/link";
import LoginForm from "../components/LoginForm";

const Home: NextPage = () => {
  const user = useUserContext();

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div>
      <Link href="/posts/new">Create post</Link>
    </div>
  );
};

export default Home;
