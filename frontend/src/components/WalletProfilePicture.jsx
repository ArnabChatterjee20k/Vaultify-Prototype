import { useAddress } from "@thirdweb-dev/react";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

export default function WalletProfilePicture() {
  const address = useAddress();
  return <Jazzicon seed={jsNumberForAddress(address)} />;
}