"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md"
// import { BiEdit } from "react-icons/bi";
// import { UseMutationResult } from "@tanstack/react-query";
import { IBillboard } from "src/interfaces";
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
  // {
  //   accessorKey: "stage",
  //   header: ({ column }) => <ColumnHead title="Stage" column={column} />,
  // },
  {
    accessorKey: "startDate",
    header: ({ column }) => <ColumnHead title="Proposed Start Date" column={column} />,
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => <ColumnHead title="End Date" column={column} />,
  },
  {
    accessorKey: "ctaText",
    header: ({ column }) => <ColumnHead title="Text" column={column} />,
  },
  {
    accessorKey: "ctaLink",
    header: ({ column }) => <ColumnHead title="Link" column={column} />,
  },
  {
    id: "actions",
    header: ({ column }) => <ColumnHead title="Actions" column={column} className="flex items-center justify-center" />,
    cell: ({ row }) => {
      const billboard = row.original
      return (
        <div className="flex items-center justify-center gap-2">
          <Link to={`/billboards/${billboard.id}`}>
              <BsEye className="text-xl cursor-pointer text-black/40"  />
          </Link>
        {/* <BiEdit className="text-xl cursor-pointer text-black/40" onClick={() => editFunc(billboard?.id || "")} /> */}
          <MdDelete onClick={() => deleteFunc(billboard.id || "")} className="text-xl cursor-pointer text-black/40" />
        </div>

      )
    },
  },
]