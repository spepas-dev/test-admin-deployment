import { ApiService } from './api.service';

interface AuthResponse {
  status: number;
  message: string;
  data: {
    token: string;
    user: unknown;
    refreshToken: string;
  };
}

export class AuthService {
  static async login(email: string, password: string) {
    return ApiService.post<AuthResponse>('/api/gateway/v1/auth/signin', { email, password });
  }

  static async getManufactures() {
    const data = ApiService.get<unknown>('/api/gateway/v1/inventry/car-manufacturers-all');
    console.log(data, 'Data=============================================;');
    return data;
  }

  static async logout() {
    return ApiService.post('/auth/logout');
  }

  static async getCurrentUser() {
    return ApiService.get<AuthResponse['data']['user']>('/auth/user');
  }
}
