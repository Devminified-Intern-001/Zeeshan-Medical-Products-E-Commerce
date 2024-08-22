/* eslint-disable @typescript-eslint/no-explicit-any */
import request from '../../utils/request';
// import { stringify } from 'qs'
// export const setCredentials = async (params: {
//     telegram_id: number
//     kol_id: number
// }): Promise<ChatHistoryResponse> => {
//     return request(`/kol/chat/history?${stringify(params)}`).then(
//         (res: any) => {
//             if (!res || !res.success) {
//                 throw new Error(res?.data?.message || '')
//             }
//             return res
//         }
//     )
// }

export const userProfileGetDetails =
  async (): Promise<IUserProfileDetailsResponse> => {
    return request(`/User`).then((res: any) => {
      if (!res || !res.success) {
        throw new Error(res?.data?.message || '');
      }
      return res;
    });
  };
export const userProfilePostDetails = async (data: {
  gender?: string;
  dateOfBirth?: Date;
  nic?: string;
  mobile?: string;
}): Promise<IUserProfileDetailsPostResponse> => {
  return await request('/User', {
    data,
    method: 'PUT',
  }).then((res: any) => {
    if (!res || !res.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};
export const userProfilemage = async (
  image?: string
): Promise<IUserProfileImageResponse> => {
  return await request('/User', {
    data: image,
    method: 'POST',
  }).then((res: any) => {
    if (!res || !res.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};
export const signup = async (data: {
  userName: string;
  email: string;
  password: string;
  terms: boolean;
}): Promise<SignUpResponse> => {
  return await request('/signUp', {
    data,
    method: 'POST',
  }).then((res: any) => {
    if (!res || !res.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};
export const login = async (data: {
  userName: string;
  password: string;
}): Promise<LoginResponse> => {
  return await request('/logIn', {
    data,
    method: 'POST',
  }).then((res: any) => {
    if (!res || !res.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};
export const ModalForm = async (data: {
  email: string;
  age: string;
  referrer: string;
  gender: string;
  showGender: string;
  location: string;
  diagnosis: string;
  indicators: string;
  subType: string;
  startTime: string;
}): Promise<ModalFormResponse> => {
  return await request('/form/submitForm', {
    data,
    method: 'POST',
  }).then((res: any) => {
    if (!res || !res.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};
export const allProducts = async (data: {
  searchText?: string;
  onSales?: boolean;
  type?: string;
  newArrivals?: boolean;
  minPrice?: number;
  maxPrice?: number;
  dietNeeds?: string[];
  allergenFilters?: string[];
}): Promise<allProductResponse> => {
  return await request('/product/get?maxNumber=4', {
    data,
    method: 'POST',
  }).then((res: any) => {
    if (!res || !res.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};
export const applyFilters = async (data: {
  searchText?: string;
  onSales?: boolean;
  type?: string;
  newArrivals?: boolean;
  minPrice?: number;
  maxPrice?: number;
  dietNeeds?: string[];
  allergenFilters?: string[];
}): Promise<allProductResponse> => {
  return await request('/product/get?maxNumber=10', {
    data,
    method: 'POST',
  }).then((res: any) => {
    if (!res || !res.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};
export const productShopIteam = async (data: {
  productName: string;
}): Promise<productShopItem> => {
  return await request(`/product/${data.productName}`, {
    method: 'GET',
  }).then((res: any) => {
    if (!res || !res.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};
export const AddToCartApi = async (data: {
  item?: string;
  count?: number;
  cartID?: string | null;
}): Promise<addToCartApiResponse> => {
  return await request('/pay/addToCart', {
    data,
    method: 'POST',
  }).then((res: any) => {
    if (!res || !res.success) {
      throw new Error(res?.data?.message || '');
    }
    return res;
  });
};
