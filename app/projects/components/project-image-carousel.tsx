"use client";

import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ProjectImage } from "../types/project";

type Props = {
  title: string;
  images: readonly ProjectImage[];
};

export function ProjectImageCarousel({ images, title }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());

    const onSelect = () => setSelected(api.selectedScrollSnap());

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const hasMany = images.length > 1;

  return (
    <div className="space-y-3">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: hasMany }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((img) => (
            <CarouselItem key={img.src} className="basis-full">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border bg-muted">
                <Image
                  src={img.src}
                  alt={img.alt || `${title} - imagem`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {hasMany && (
          <>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </>
        )}
      </Carousel>

      {hasMany && (
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir para a imagem ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition",
                index === selected ? "bg-foreground" : "bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
