import Image from "next/image";

const Blog = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 mb-5">
        <div className="space-y-2">
          <Image
            src="/img/blog1.jpg"
            width={400}
            height={270}
            layout="responsive"
            alt="Blog"
            className="rounded-md"
          />

          <h2 className="card-title">
            Energy Techniques That Changed Your Life
          </h2>
          <p className="opacity-75 antialiased">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            nihil, qui eaque officia dolore accusamus saepe voluptatibus...
          </p>
        </div>
        <div className="space-y-2">
          <Image
            src="/img/blog2.jpg"
            width={400}
            height={270}
            layout="responsive"
            alt="Blog"
            className="rounded-md"
          />

          <h2 className="card-title">3 Reasons You’re Struggling With Food</h2>
          <p className="opacity-75 antialiased">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            nihil, qui eaque officia dolore accusamus saepe voluptatibus...
          </p>
        </div>
        <div className="space-y-2">
          <Image
            src="/img/blog3.jpg"
            width={400}
            height={270}
            layout="responsive"
            alt="Blog"
            className="rounded-md"
          />

          <h2 className="card-title">Dieting Slowing Down Your Metabolism</h2>
          <p className="opacity-75 antialiased">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            nihil, qui eaque officia dolore accusamus saepe voluptatibus...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
