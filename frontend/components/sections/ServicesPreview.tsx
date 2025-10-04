import { Card } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  slug: string;
  icon?: {
    url: string;
    alternativeText?: string;
  };
}

interface ServicesPreviewProps {
  services: ServiceItem[];
}

export function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.id}>
              <Card className="h-full cursor-pointer hover:scale-105 transition-transform">
                {service.icon && (
                  <div className="flex justify-center mb-4">
                    <Image
                      src={service.icon.url}
                      alt={service.icon.alternativeText || service.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
