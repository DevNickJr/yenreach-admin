"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md"
// import { BiEdit } from "react-icons/bi";
// import { UseMutationResult } from "@tanstack/react-query";
import { IAdmin } from "src/interfaces";
import ColumnHead from "src/components/ColumnHead";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";


interface IProps {
  editFunc: (id: string) => void,
//   updateStatus: UseMutationResult<any, any, IUpdateStatus, unknown>,
  deleteFunc: (id: string) => void
}

export const columnsMaker = ({ 
  // editFunc,
  deleteFunc
 }: IProps): ColumnDef<IAdmin>[] => [
  {
    id: "select",
    cell: () => {
      return (
        <button className="w-6 h-6 p-0">
          <MdCheckBoxOutlineBlank className="w-6 h-6 text-black/10" />
        </button>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => <ColumnHead title="Name" column={column} />,
  },
  {
    accessorKey: "username",
    header: ({ column }) => <ColumnHead title="Username" column={column} />,
  },
  {
    accessorKey: "personal_email",
    header: ({ column }) => <ColumnHead title="Personal Email" column={column} />,
  },
  {
    accessorKey: "official_email",
    header: ({ column }) => <ColumnHead title="Official Email" column={column} />,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => <ColumnHead title="Phone" column={column} />,
  },
  {
    accessorKey: "autho_level",
    header: ({ column }) => <ColumnHead title="Level" column={column} />,
  },
  {
    id: "actions",
    header: ({ column }) => <ColumnHead title="Actions" column={column} className="flex items-center justify-center" />,
    cell: ({ row }) => {
      const admin = row.original
      return (
        <div className="flex items-center justify-center gap-2">
          <Link to={`/admins/${admin.verify_string}`}>
              <BsEye className="text-xl cursor-pointer text-black/40"  />
          </Link>
        {/* <BiEdit className="text-xl cursor-pointer text-black/40" onClick={() => editFunc(admin?.verify_string || "")} /> */}
          <MdDelete onClick={() => deleteFunc(admin.verify_string || "")} className="text-xl cursor-pointer text-black/40" />
        </div>

      )
    },
  },
]