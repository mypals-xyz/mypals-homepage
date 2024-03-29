import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";

export default function Login(): JSX.Element {
  const { getAccessToken, login } = usePrivy();
  getAccessToken().then((value) => {
    if (value) {
      window.location.href = `/?access_token=${value}`;
    }
  });

  useEffect(() => {
    login();
  }, []);

  return <div></div>;
}
