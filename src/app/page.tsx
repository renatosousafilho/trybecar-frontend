import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>{process.env.API_URL}</h1>
    </div>
  );
}
