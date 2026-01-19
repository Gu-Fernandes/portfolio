import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
};

export function ProfilePhoto({
  src = "/profile.jpg",
  alt = "Foto do Gu",
}: Props) {
  return (
    <div className="overflow-hidden border-b border-purple-600 rounded-3xl bg-muted">
      <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 320px, 80vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
