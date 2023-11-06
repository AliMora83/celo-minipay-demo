import UserInfo from "@/components/home/userInfo";

export default function Home() {

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <div className="">
        <div className="text-center mb-4">
          <p className="text-slate-500 uppercase font-thin tracking-widest text-xl">Welcome</p>
          <UserInfo />
        </div>
      </div>
    </div>
  );
}
