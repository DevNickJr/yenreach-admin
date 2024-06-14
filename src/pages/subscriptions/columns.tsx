"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md"
// import { BiEdit } from "react-icons/bi";
// import { UseMutationResult } from "@tanstack/react-query";
import { ISubscription } from "src/interfaces";
import ColumnHead from "src/components/ColumnHead";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
// import { BsEye } from "react-icons/bs";
// import { Link } from "react-router-dom";


interface IProps {
  editFunc: (id: string) => void,
//   updateStatus: UseMutationResult<any, any, IUpdateStatus, unknown>,
  deleteFunc: (id: string) => void
}

export const columnsMaker = ({ 
  // editFunc,
  deleteFunc
 }: IProps): ColumnDef<ISubscription>[] => [
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
    accessorKey: "id",
    header: ({ column }) => <ColumnHead title="ID" column={column} />,
  },
  {
    accessorKey: "slider",
    header: ({ column }) => <ColumnHead title="Slider" column={column} />,
  },
  {
    accessorKey: "position",
    header: ({ column }) => <ColumnHead title="Position" column={column} />,
  },
  {
    accessorKey: "package",
    header: ({ column }) => <ColumnHead title="Package" column={column} />,
  },
  {
    accessorKey: "photos",
    header: ({ column }) => <ColumnHead title="Photos" column={column} />,
  },
  {
    accessorKey: "branches",
    header: ({ column }) => <ColumnHead title="Branches" column={column} />,
  },
  {
    accessorKey: "socialmedia",
    header: ({ column }) => <ColumnHead title="Social Media" column={column} />,
  },
  {
    accessorKey: "videos",
    header: ({ column }) => <ColumnHead title="Videos" column={column} />,
  },
  {
    accessorKey: "created",
    header: ({ column }) => <ColumnHead title="Created At" column={column} />,
  },
  {
    accessorKey: "last_updated",
    header: ({ column }) => <ColumnHead title="Last Updated" column={column} />,
  },
  {
    id: "actions",
    header: ({ column }) => <ColumnHead title="Actions" column={column} className="flex items-center justify-center" />,
    cell: ({ row }) => {
      const admin = row.original
      return (
        <div className="flex items-center justify-center gap-2">
          <Link to={`/subscriptions/${admin.verify_string}/plans`}>
              <BsEye className="text-xl cursor-pointer text-black/40"  />
          </Link>
        {/* <BiEdit className="text-xl cursor-pointer text-black/40" onClick={() => editFunc(admin?.verify_string || "")} /> */}
          <MdDelete onClick={() => deleteFunc(admin.verify_string || "")} className="text-xl cursor-pointer text-black/40" />
        </div>
      )
    },
  },
]

