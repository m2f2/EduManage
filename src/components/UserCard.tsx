import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1 min-w-[130px]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          10/2024
        </span>
        <Image src="/more.png" width={20} height={20} alt="" />
      </div>
      <h1 className="text-2xl font-semibold my-4">3211</h1>
      <h1 className="capitalize text-sm font-medium text-gray-500">{type}</h1>
    </div>
  );
};

export default UserCard;
