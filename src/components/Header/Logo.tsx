import Image from "next/image";
import Icon from "@/images/logo.png";

export const Logo = ({ width = 40, height = 40 }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Image
        src={Icon}
        alt="Logo XinLeo"
        width={width}
        height={height}
        className="rounded-md"
      ></Image>
      <h2 className="font-semibold">XinLeo</h2>
    </div>
  );
};
