export interface ProductReview {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title?: string;
  content: string;
  images?: string[];
  createdAt: string;
  updatedAt?: string;

  // 額外擴充
  likesCount?: number; // 點讚數
  dislikesCount?: number; // 倒讚數
  replies?: ReviewReply[]; // 子留言（例如賣家回覆或其他顧客回覆）
}

// 回覆結構
interface ReviewReply {
  id: string;
  reviewId: string; // 所屬評論ID
  userId: string;
  userName: string;
  content: string;
  createdAt: string;
}
