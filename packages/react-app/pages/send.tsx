import Button from "@/components/common/Button";
import { getNFT, mintNFT, transferCUSD } from "@/utils/transactions";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function Send() {
  const { address, isConnected } = useAccount();

  const [loading, setLoading] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [nfts, setNfts] = useState<string[]>([]);
  const [nftUrl, setNftUrl] = useState<string>("");

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
      getNFT(address).then((nftUrls) => {
        setNfts(nftUrls);
      });
    }
  }, [address, isConnected]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full flex flex-col justify-center items-start  px-7">
        <div className="h2 text-center mb-4">
          Your address: {userAddress.substring(0, 5)}...
          {userAddress.substring(userAddress.length - 4, userAddress.length)}
        </div>
        <Button
          text="Send 0.1 cUSD"
          loading={loading}
          onClick={async () => {
            setLoading(true);
            await transferCUSD(
              "0x0950FB230a3F36A4bb19b45c0a5309d1D9143e18",
              address as string
            );
            setLoading(false);
          }}
        />
      </div>
    </div>
  );
}
