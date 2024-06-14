"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md"
// import { BiEdit } from "react-icons/bi";
// import { UseMutationResult } from "@tanstack/react-query";
import { IPlan } from "src/interfaces";
import ColumnHead from "src/components/ColumnHead";
import { formatDate } from "src/utils/dateFunc";


interface IProps {
  editFunc: (id: string) => void,
//   updateStatus: UseMutationResult<any, any, IUpdateStatus, unknown>,
  deleteFunc: (id: string) => void
}

export const columnsMaker = ({ 
  // editFunc,
  deleteFunc
 }: IProps): ColumnDef<IPlan>[] => [
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
    accessorKey: "plan",
    header: ({ column }) => <ColumnHead title="plan" column={column} />,
  },
  {
    accessorKey: "duration",
    header: ({ column }) => <ColumnHead title="duration" column={column} />,
  },
  {
    accessorKey: "duration_type",
    header: ({ column }) => <ColumnHead title="duration_type" column={column} />,
  },
  {
    accessorKey: "price",
    header: ({ column }) => <ColumnHead title="price" column={column} />,
  },
//   {
//     accessorKey: "section",
//     header: ({ column }) => <ColumnHead title="Section" column={column} />,
//   },
  // {
  //   accessorKey: "details",
  //   header: ({ column }) => <ColumnHead title="Details" column={column} />,
  // },
  {
    accessorKey: "created",
    cell: ({row}) => {
      const val = row.original
      
      return (
        <button className=''>
          {formatDate(+val.created!)}
        </button>
      )
    },
    header: ({ column }) => <ColumnHead title="Created At" column={column} />,
  },
  {
    accessorKey: "last_updated",
    cell: ({row}) => {
      const val = row.original
      
      return (
        <button className=''>
          {formatDate(+val.last_updated!)}
        </button>
      )
    },
    header: ({ column }) => <ColumnHead title="Last Updated" column={column} />,
  },
  {
    id: "actions",
    header: ({ column }) => <ColumnHead title="Actions" column={column} className="flex items-center justify-center" />,
    cell: ({ row }) => {
      const val = row.original
      return (
        <div className="flex items-center justify-center gap-2">
          {/* <Link to={`/categories/${val.verify_string}/subcategories`}>
              <BsEye className="text-xl cursor-pointer text-black/40"  />
          </Link> */}
        {/* <BiEdit className="text-xl cursor-pointer text-black/40" onClick={() => editFunc(admin?.verify_string || "")} /> */}
          <MdDelete onClick={() => deleteFunc(val.verify_string || "")} className="text-xl cursor-pointer text-black/40" />
        </div>

      )
    },
  },
]