import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <div className="border b py-2 bg-stone-50">
      <div className="items-center container mx-auto justify-between flex">
        <div className="bg-slate-100 px-2 py-1 rounded-sm">Driver File</div>
        <div className="flex gap-2">
          <OrganizationSwitcher/>
          <UserButton />
        </div>
      </div>
    </div>
  );
}
