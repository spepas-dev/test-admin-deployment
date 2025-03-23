export interface PaymentAccount {
  id: number;
  Account_ID: string;
  User_ID: string;
  added_by: string;
  mode: 'BANK_ACCOUNT' | 'WALLET';
  accountNumber: string;
  provider: string;
  name: string;
  date_added: string;
  status: number;
}

export interface User {
  name: string;
  email: string;
  phoneNumber: string;
  verificationStatus: number;
  status: number;
  user_type: 'BUYER' | 'SELLER' | 'ADMIN';
  Seller_ID: string | null;
  referral_Code: string | null;
  createdAt: string;
  updatedAt: string;
  gopa: string | null;
  mepa: string | null;
  sellerDetails: unknown | null;
  deliver: unknown | null;
  paymentAccounts: PaymentAccount[];
  user_groups: unknown[];
  user_roles: unknown[];
}
