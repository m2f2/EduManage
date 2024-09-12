import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* lift */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      {/* user card */}
        <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="students"/>
        <UserCard type="teachers"/>
        <UserCard type="parents"/>
        <UserCard type="staffs"/>
        </div>
        {/* middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row ">
          {/* count chart */}
          <div className=" w-full lg:w-1/3 h-[450px]">
          <CountChart/>
          </div>
          {/* attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChart/>
          </div>
        </div>
        {/* bottom chart */}
        <div className="w-full h-[500px] ">
        <FinanceChart/>
        </div>
      </div>
      {/* right */}
      <div className='w-full lg:w-1/3'></div>
    </div>
  )
}

export default AdminPage
