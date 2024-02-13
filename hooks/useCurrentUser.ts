import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const useCurrentUser = () => {
  const session = useSession();

  useEffect(() => {}, [useSession()]);

  return session.data !== null ? session.data!.user : null;
};
