import { getUsers } from "@/lib/firebase/helper";
import ChatSidebar from "@/modules/ChatSidebar";
import MainScreen from "@/modules/MainScreen";

export default async function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="bg-white-500 w-1/3 overflow-y-auto">
        <ChatSidebar />
      </div>
      <div className="w-2/3 overflow-y-auto ">
        <MainScreen />
      </div>
    </main>
  );
}
