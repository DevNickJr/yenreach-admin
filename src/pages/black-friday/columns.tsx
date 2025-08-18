"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md"
// import { BiEdit } from "react-icons/bi";
// import { UseMutationResult } from "@tanstack/react-query";
import { IBlackFriday } from "src/interfaces";
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
 }: IProps): ColumnDef<IBlackFriday>[] => [
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
    accessorKey: "product.name",
    header: ({ column }) => <ColumnHead title="Product" column={column} />,
  },
  {
    accessorKey: "product.price",
    header: ({ column }) => <ColumnHead title="Price" column={column} />,
  },
  {
    accessorKey: "discountedPrice",
    header: ({ column }) => <ColumnHead title="Discounted Price" column={column} />,
  },
  {
    accessorKey: "dealEndDate",
    header: ({ column }) => <ColumnHead title="Deal End Date" column={column} />,
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => <ColumnHead title="Quantity" column={column} />,
  },
  {
    id: "actions",
    header: ({ column }) => <ColumnHead title="Actions" column={column} className="flex items-center justify-center" />,
    cell: ({ row }) => {
      const admin = row.original
      return (
        <div className="flex items-center justify-center gap-2">
          {/* <Link to={`/admins/${admin.id}`}>
              <BsEye className="text-xl cursor-pointer text-black/40"  />
          </Link> */}
        {/* <BiEdit className="text-xl cursor-pointer text-black/40" onClick={() => editFunc(admin?.id || "")} /> */}
          <MdDelete onClick={() => deleteFunc(admin.id || "")} className="text-xl cursor-pointer text-black/40" />
        </div>

      )
    },
  },
]