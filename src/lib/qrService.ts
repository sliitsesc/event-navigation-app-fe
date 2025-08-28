import api from "./axios";
import { QRCodeResponse } from "@/types/zones";

export const scanQRCode = async (qrCode: string): Promise<QRCodeResponse> => {
  try {
    const response = await api.get<QRCodeResponse>(
      `/exhibition/qr-code/${qrCode}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
