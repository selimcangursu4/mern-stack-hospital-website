import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewsCard = ({
  platform,
  customer_name,
  customer_message,
  service_name,
  date,
}) => {
  return (
    <article
      className="w-full bg-white rounded-xl p-6 flex flex-col gap-4 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div
        className="flex text-yellow-400 text-xl"
        itemProp="reviewRating"
        itemScope
        itemType="https://schema.org/Rating"
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar key={i} />
        ))}
        <meta itemProp="ratingValue" content="5" />
        <meta itemProp="bestRating" content="5" />
      </div>
      <span className="text-xs font-semibold text-red-500">
        {platform} Yorum
      </span>
      <p
        className="text-gray-700 text-sm leading-relaxed"
        itemProp="reviewBody"
      >
        “{customer_message}”
      </p>
      <h4 className="text-md font-semibold text-gray-900" itemProp="author">
        {customer_name}
      </h4>
      <span className="text-xs text-gray-500">
        Alınan Hizmet: <span className="font-medium">{service_name}</span>
      </span>
      <time
        className="text-xs text-gray-400"
        itemProp="datePublished"
        dateTime={date}
      >
        {date}
      </time>
    </article>
  );
};

export default ReviewsCard;
