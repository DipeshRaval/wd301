import { MembersProvider } from "../../context/members/context";
import MemberList from "./MemberList";
import NewMember from "./NewMember";

const Members = () => {
  return (
    <MembersProvider>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewMember />
      </div>
      <div>
        <MemberList />
      </div>
    </MembersProvider>

  )
}
export default Members;
