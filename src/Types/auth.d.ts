interface UserDetailsResponse {
  userName: string;
  role: string;
  email: string;
}

interface SignUpResponse {
  done: boolean;
  error: string | null;
}
interface LoginResponse {
  access: string;
  done: boolean;
  success: boolean;
  refresh: string;
  userData: UserDetailsResponse;
  error: string | null;
}
interface ModalFormMessage {
  userName: string | null;
}
interface ModalFormResponse {
  done: boolean;
  message: ModalFormMessage;
  error: string | null;
}
interface UserPofileMessage {
  userName: string;
  email: string;
  gender: string;
  dateOfBirth: Date;
  nic: string;
  mobile: string;
  image: string | null;
}
interface IUserProfileDetailsResponse {
  done: boolean;
  message: UserPofileMessage;
  error: string | null;
}
interface IUserProfileDetailsPostResponse {
  done: boolean;
  message: string;
  success: boolean;
  error: string | null;
}
interface IUserProfileImageResponse {
  done: boolean;
  message: string;
  error: string | null;
}

interface allProductMessage {
  title: string;
  shortTitle: string;
  description: string;
  price: number;
  unit: string;
  quantity: number;
  defaultImage: string;
}
interface allProductResponse {
  done: boolean;
  message: allProductMessage[];
}
interface amountsPerServingMessage {
  item: string;
  value: string;
  valuePercent: number | null;
}

interface reviewsMessage {
  userName: string;
  rating: number;
  reviewText: string;
  reviewDate: string;
  userImage: string;
}

interface productShopItemMessage {
  title: string;
  price: number;
  productType: string;
  quantity: number;
  images: string[];
  defaultImage: number | null;
  ingredients: string[];
  servingsPerContainer: number | null;
  servingSize: string;
  tags: string[];
  amountsPerServing: amountsPerServingMessage[];
  alertMsg: string;
  orderCount: number;
  unit: string;
  reviews: reviewsMessage[];
  reviewCount: number;
  avgRating: number;
  ratingStats: number[];
  description: string;
}
interface productShopItem {
  done: boolean;
  message: productShopItemMessage;
  error: string | null;
}

interface addToCartApiResponse {
  done: boolean;
  message: string | undefined;
  error: string | null;
}
