import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        gap: "8px",
      }}
    >
      <span>User Name: {user?.username}</span>
      <span style={{ color: "green" }}>Password: {user?.password}</span>
    </div>
  );
}
