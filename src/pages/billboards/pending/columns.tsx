"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md"
import { BiEdit } from "react-icons/bi";
// import { UseMutationResult } from "@tanstack/react-query";
import { IBillboard } from "src/interfaces";
import ColumnHead from "src/components/ColumnHead";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

// agentRole: "Enumerator",
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
  editFunc,
  deleteFunc
 }: IProps): ColumnDef<IBillboard>[] => [
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
    accessorKey: "title",
    header: ({ column }) => <ColumnHead title="Title" column={column} />,
  },
  {
    accessorKey: "stage",
    header: ({ column }) => <ColumnHead title="Stage" column={column} />,
  },
  {
    accessorKey: "proposed_start_date",
    header: ({ column }) => <ColumnHead title="Proposed Start Date" column={column} />,
  },
  {
    accessorKey: "start_date",
    header: ({ column }) => <ColumnHead title="Start Date" column={column} />,
  },
  {
    accessorKey: "call_to_action_type",
    header: ({ column }) => <ColumnHead title="Type" column={column} />,
  },
  {
    accessorKey: "call_to_action_link",
    header: ({ column }) => <ColumnHead title="Link" column={column} />,
  },
  {
    id: "actions",
    header: ({ column }) => <ColumnHead title="Actions" column={column} className="flex items-center justify-center" />,
    cell: ({ row }) => {
      const business = row.original
      return (
        <div className="flex items-center justify-center gap-2">
            <Link to={`/businesses/${business.verify_string}`}>
                <BsEye className="text-base cursor-pointer text-black/40"  />
            </Link>
            <BiEdit className="text-base cursor-pointer text-black/40" onClick={() => editFunc(business?.verify_string || "")} />
            <MdDelete onClick={() => deleteFunc(business.verify_string || "")} className="text-base cursor-pointer text-black/40" />
        </div>

      )
    },
  },
]