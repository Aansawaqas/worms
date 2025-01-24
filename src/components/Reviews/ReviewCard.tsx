import React from 'react';
import { Star } from 'lucide-react';
import { Review } from './types';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{review.name}</h3>
          <div className="flex text-yellow-400">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4" fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{review.comment}</p>
    </div>
  );
}