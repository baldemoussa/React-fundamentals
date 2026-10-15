interface LogoProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function Logo({ imageSrc, imageAlt }: LogoProps) {
  return (
    <img
      src={
        imageSrc
          ? imageSrc
          : "https://plus.unsplash.com/premium_vector-1689096818551-edb79a6fa3da?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
      alt={imageAlt ? imageAlt : "Image"}
      style={{ width: "500px" }}
    />
  );
}