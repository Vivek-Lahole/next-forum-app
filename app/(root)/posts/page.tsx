import { auth } from "@/auth";

const Posts = async () => {
  const session = await auth();

  const id = session?.user?.id;

  return <div>{JSON.stringify(session)}</div>;
};

export default Posts;
