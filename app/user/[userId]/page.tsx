import UserPage from "@/components/main/UserPage";

interface UserSectionProps {
  params: {
    userId: string;
  };
}

export default function User({ params: { userId } }: UserSectionProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserPage userId={userId} />
    </main>
  );
}
