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
    return ApiService.postauth<AuthResponse>('/api/gateway/v1/auth/signin', { email, password });
  }

  static async getManufactures() {
    return ApiService.get<unknown>('/api/gateway/v1/inventry/car-manufacturers-all');
  }

  static async logout() {
    return ApiService.post('/auth/logout');
  }

  static async getCurrentUser() {
    return ApiService.get<AuthResponse['data']['user']>('/auth/user');
  }
}
