import { toast } from "react-toastify";



export const apiSuccessMessage = (message:string):void => {
    toast.success(message);
}

export const apiErrorMessage = (message:string):void => {
    toast.error(message);
}


