"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md"
// import { BiEdit } from "react-icons/bi";
// import { UseMutationResult } from "@tanstack/react-query";
import { IBusiness } from "src/interfaces";
import ColumnHead from "src/components/ColumnHead";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";

// businessRole: "Enumerator",
// zoneId: string,
// email: string,
// password: string,
// name: string,
// phone: string,
// gender: string

interface IProps {
  editFunc: (id: string) => void,
//   updateStatus: UseMutationResult<any, any, IUpdateStatus, unknown>,
  deleteFunc: (id: string) => void
}


export const columnsMaker = ({ 
  // editFunc,
  deleteFunc
 }: IProps): ColumnDef<IBusiness>[] => [
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
    header: ({ column }) => <ColumnHead title="Business Name" column={column} />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <ColumnHead title="Email" column={column} />,
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => <ColumnHead title="Phone" column={column} />,
  },
  {
    accessorKey: "owner_name",
    header: ({ column }) => <ColumnHead title="Owner's Name" column={column} />,
  },
  // {
  //   accessorKey: "state",
  //   header: ({ column }) => <ColumnHead title="State" column={column} />,
  // },
  {
    id: "actions",
    header: ({ column }) => <ColumnHead title="Actions" column={column} className="flex items-center justify-center" />,
    cell: ({ row }) => {
      const business = row.original
      return (
        <div className="flex items-center justify-center gap-2">
          <Link to={`/businesses/${business.id}`}>
              <BsEye className="text-xl cursor-pointer text-black/40"  />
          </Link>
          <Link to={`/businesses/${business.id}/edit`}>
              <BiEdit className="text-xl cursor-pointer text-black/40" />
          </Link>
          <MdDelete onClick={() => deleteFunc(business.id || "")} className="text-xl cursor-pointer text-black/40" />
        </div>

      )
    },
  },
]