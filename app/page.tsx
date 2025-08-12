import ImageCard from "@/components/ImageCard"; // Adjust path as needed

export default function Home() {
  return (
    <main>
      <div className="section site-section">
        <div className="wrapper">
          <ImageCard
            imageSrc="/images/girl.png"
            imageAlt="girl image"
            className="relative bg-orange-300 rounded-3xl w-56 h-56 mt-12"
          />

          {/* Example with different styling */}
          <ImageCard
            imageSrc="/images/girl-2.png"
            imageAlt="another image"
            className="relative bg-red-400 rounded-2xl w-56 h-56 mt-12"
          />
        </div>
      </div>
    </main>
  );
}
