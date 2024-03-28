import { useLogin, usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";

export default function Login(): JSX.Element {
  const { getAccessToken } = usePrivy();
  const { login } = useLogin({
    onComplete: () => {
      getAccessToken().then((value) => {
        window.location.href = `/?access_token=${value}`;
      });
    }
  });

  useEffect(() => {
    login();
  }, []);

  return <div></div>;
}
