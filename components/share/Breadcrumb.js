import Link from "next/link";

const Breadcrumb = ({ name }) => {
  return (
    <div className="h-1/2 bg-bgPrimary clip-page pb-10">
      <div className="container mx-auto px-6 py-12">
        <p className="text-base text-gray-500 font-light tracking-widest mb-2">
          <Link href="/">Home </Link>
          <span className="text-green-500 font-bold">&gt;</span> {name}
        </p>
        <h1 className="text-3xl text-gray-700 lg:text-4xl md:tracking-wide">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
