import BlogPreview from "../components/blogs/BlogPreview";
import Breadcrumb from "../components/share/Breadcrumb";

export default function preview() {
  return (
    <div>
      <main>
        <Breadcrumb name="Energy Techniques That Changed Your Life" />
        <BlogPreview />
      </main>
    </div>
  );
}
