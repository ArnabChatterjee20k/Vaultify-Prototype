import { ConnectWallet } from "@thirdweb-dev/react";
import React from 'react'
import Stack from "@mui/material/Stack";

export default function Auth() {
  return (
    <Stack justifyContent="center" alignItems="center">
        <ConnectWallet/>
    </Stack>
  )
}
