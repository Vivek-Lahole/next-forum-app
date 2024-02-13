import { auth } from "@/auth";

const Posts = async () => {
  const session = await auth();

  return <div>{JSON.stringify(session)}</div>;
};

export default Posts;
