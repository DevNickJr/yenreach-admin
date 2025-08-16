import { useEffect, useReducer } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { toast } from "react-toastify"
import Button from "src/components/Button"
import Loader from "src/components/Loader"
import { useAuthContext } from "src/hooks/useAuthContext"
import useFetch from "src/hooks/useFetch"
import useImage from "src/hooks/useImage"
import useMutations from "src/hooks/useMutation"
import { IAddProduct, IBusiness, ICategory, IProduct } from "src/interfaces"
import Layout from 'src/layout'
import { RiAddFill } from 'react-icons/ri'
import { apiAdminAddBlackProduct, apiGetProductCategories } from "src/services/ProductService"
import { apiAdminGetOneBusinesses } from "src/services/CommonService"
import { useParams } from "react-router-dom"
import { HiX } from "react-icons/hi"

const initialState: IProduct = { 
    quantity: 0,
    price: 0,
    safetyTip: '',
    name : "",
    businessId: '',
    description : "",
    categories : [],
    photos : [],
    color : "",
    discountedPrice: 0,
    dealEndDate: '',
    type: 'existing',
    productId: '',
}

type Action = "reset" | "name" | "price" | "quantity" | "safetyTip" | "businessId" | "description" | "categories" | "photos" | "color" | "discountedPrice" | "dealEndDate"
interface IAction {
    type: Action,
    payload: string | number | { id: string, category: string }[] | string[]
}

const AddProduct = () => {
    const { id } = useParams();
    const { user } = useAuthContext()
    const [product, setProduct] = useReducer((state: IProduct, action: IAction) => {
    if (action.type === "reset") {
        return initialState
    }
    return {
        ...state,
        [action.type]: action.payload
    }
    }, initialState)

    const { data: business, isLoading } = useFetch<IBusiness>({
        api: apiAdminGetOneBusinesses,
        key: ["one-businesses", id || ""],
        param: { id },
        enabled: !!id
    })

    const { url, uploadImage, error, progress, loading: uploadingImg } = useImage()


    const { data: categories } = useFetch<ICategory[]>({
        api: apiGetProductCategories,
        key: ["categoriex"],
    })  
      
    const handleCategory = (value: string) => {
        const category = product?.categories?.find(cat => cat.id == value)?.category;
        let val = []
        if (category) {
            val = product?.categories?.filter(cat => cat.id != value);
        } else {
            val = [
                ...product.categories,
                { 
                    id: value,
                    category: categories?.find(cat => cat.id == value)?.category,
                }
            ]
        }
        setProduct({ type: "categories", payload: val })
    }

    useEffect(() => {
        if(url) {
            setProduct({ type: "photos", payload: [...product.photos, url] })
        }
   }, [url])

   const removePhoto = (url: string) => {
        setProduct({ type: "photos", payload: product.photos?.filter(photo => photo != url) })
   }

    const addProductMutation = useMutations<IAddProduct, unknown>(
        apiAdminAddBlackProduct,
        {
        onSuccess: (data: unknown) => {
            console.log("data", data)
            toast.success("Black Friday Product Added Successfully.")
            setProduct({ type: "reset", payload: "" })
        },
        showErrorMessage: true,
        requireAuth: true,
    })

    const handleChange = (type: Action, payload: string | number) => {
        setProduct({ type, payload })
    }

    return (
        <Layout>
          {addProductMutation?.isLoading && <Loader />}
          <div className="flex flex-col gap-1 p-6 mb-6">
            <h1 className="text-xl">Hi {user?.username}</h1>
            <h1>Your Product Layout</h1>
            <h1 className="text-xl mt-6">{business?.name}</h1>
            <div className="flex flex-col gap-4 mt-12">
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Product Name</span>
                    <input value={product.name} onChange={e => handleChange("name", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Product Description</span>
                    <input value={product.description} onChange={e => handleChange("description", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="categories" className='font-medium text-sm'>Categories</label>
                    <select onChange={(e) => handleCategory(e.target.value)} required className='p-2 px-3 text-sm rounded-md outline-none' name="categories" id="categories">
                        <option value="">Select Product Categories</option>
                        {categories?.map((category) => (
                            <option key={category.id} value={category.id}>{category.category}</option>
                        ))}
                    </select>
                    <div>
                    <div className="flex flex-wrap">
                        {product?.categories?.map((category) => (
                            <span key={category?.category} onClick={() => {
                                handleCategory(category.id)
                            }} className='bg-gray-200 text-gray-600 text-xs p-2 rounded-md mr-2 flex gap-1 w-fit'>
                                {category?.category}
                                <HiX />
                            </span>
                        ))}
                    </div>
                        </div>
                </div>
                <div className='md:flex gap-4'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <span className="text-xs">Price</span>
                        <input value={product.price} onChange={e => handleChange("price", Number(e.target.value) || 0)} type="number" className="p-2 px-3 text-sm rounded-md outline-none w-full" />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <span className="text-xs">Discounted Price</span>
                        <input value={product.discountedPrice} onChange={e => handleChange("discountedPrice", Number(e.target.value) || 0)} type="number" className="p-2 px-3 text-sm rounded-md outline-none w-full" />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <span className="text-xs">Deal End Date</span>
                        <input value={product.dealEndDate} onChange={e => handleChange("dealEndDate", e.target.value)} type="date" className="p-2 px-3 text-sm rounded-md outline-none w-full" />
                    </div>
                </div>
                <div className='md:flex gap-4'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <span className="text-xs">Quantity</span>
                        <input value={product.quantity} onChange={e => handleChange("quantity", Number(e.target.value) || 0)} type="number" className="p-2 px-3 text-sm rounded-md outline-none w-full" />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <span className="text-xs">Color</span>
                        <input value={product.color} onChange={e => handleChange("color", e.target.value)} type="text" className="p-2 px-3 text-sm rounded-md outline-none w-full" />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs">Safety Tip</span>
                    <textarea cols={4} rows={4} value={product.safetyTip} onChange={e => handleChange("safetyTip", e.target.value)} className="p-2 px-3 text-sm rounded-md outline-none" />
                </div>
                <div className='flex flex-col gap-1'>
                        <h6 className='font-medium text-sm'>Product Images</h6>
                        <div className='flex items-center flex-wrap gap-4 mt-2'>
                            {product.photos?.map((photo) => (
                                <div key={photo} className='bg-gray rounded-lg w-36 h-36 overflow-hidden relative'>
                                    <img src={photo} alt="" className='object-cover w-full h-full' />
                                    <div onClick={() => removePhoto(photo)} className='absolute top-0 left-0 bg-black/30 w-full h-full p-4 cursor-pointer hover:cursor-pointer md:opacity-0 md:hover:opacity-100'>
                                        <AiOutlineClose size="24px" color='gray' className='float-right' />
                                    </div>
                                </div>
                            ))}
                            <>
                                <div className=''>
                                    <label htmlFor="add_image" className='font-medium text-sm bg-gray rounded-lg w-36 h-36 flex flex-col gap-2 justify-center items-center px-4 cursor-pointer'>
                                        <RiAddFill size="24px" color='gray' />
                                        <p className='text-center text-xs'>
                                            <span className='font-semibold'>Choose a file </span>
                                            <span className='font-normal'>or drag it here</span>
                                        </p>
                                    </label>
                                </div> 
                                <input 
                                    onChange={(e) => uploadImage(e.target.files[0])}
                                    className='border-gray rounded-lg mt-2 cursor-pointer w-1 h-1 invisible overflow-hidden'
                                    type="file" name="add_image" id="add_image" accept="image/*"
                                />
                            </>
                        </div>
                    </div>
                <Button onClick={() => addProductMutation.mutate({ ...product, categories: product?.categories?.map(el => el.id), businessId: id, type: "new" })} className="p-2.5 px-5 text-sm text-white bg-green-400 rounded-md w-fit">Submit</Button>
            </div>
          </div>
        </Layout>
    )
}

export default AddProduct
