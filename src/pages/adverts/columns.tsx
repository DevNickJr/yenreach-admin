"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md"
// import { BiEdit } from "react-icons/bi";
// import { UseMutationResult } from "@tanstack/react-query";
import { IAdvert } from "src/interfaces";
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
 }: IProps): ColumnDef<IAdvert>[] => [
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
    accessorKey: "title",
    header: ({ column }) => <ColumnHead title="Title" column={column} />,
  },
  {
    accessorKey: "duration",
    header: ({ column }) => <ColumnHead title="Duration" column={column} />,
  },
  {
    accessorKey: "duration_type",
    header: ({ column }) => <ColumnHead title="Duration Type" column={column} />,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <ColumnHead title="Amount" column={column} />,
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
          <Link to={`/adverts/${admin.verify_string}`}>
              <BsEye className="text-xl cursor-pointer text-black/40"  />
          </Link>
        {/* <BiEdit className="text-xl cursor-pointer text-black/40" onClick={() => editFunc(admin?.verify_string || "")} /> */}
          <MdDelete onClick={() => deleteFunc(admin.verify_string || "")} className="text-xl cursor-pointer text-black/40" />
        </div>

      )
    },
  },
]