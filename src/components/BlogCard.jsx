import { Link } from "react-router-dom";

const BlogCard = ({ title, description, imageUrl, linkTo }) => {
  return (
    <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <Link to={linkTo} className="text-red-500 hover:underline mt-2 inline-block">
          Read More
        </Link>
      </div>
    </div>
  );
};

const BlogCards = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center py-20 px-4 md:px-25  gap-8">
      <BlogCard
        title="Top 10 Must-Visit Destinations from Sri Lanka This Year"
        description="Discover the best travel spots for Sri Lankan travelers in 2025..."
        imageUrl="/assets/singapore.jpg"
        linkTo="/blog/Article1"
      />
      <BlogCard
        title="The Best Shopping Destinations in UAE"
        description="The UAE is a shopper’s paradise, offering everything from luxury brands to street markets..."
        imageUrl="/assets/dubai3.jpg"
        linkTo="/blog/Article2"
      />
      <BlogCard
        title="Top 10 Romantic Places to Visit in Sri Lanka as a Couple"
        description="Sri Lanka is a paradise for couples seeking romance, adventure, and relaxation..."
        imageUrl="/assets/tea2.jpg"
        linkTo="/blog/Article3"
      />
     

      
    </div>
    

    </>
  );
};

export default BlogCards;